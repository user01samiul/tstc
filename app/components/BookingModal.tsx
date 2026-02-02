"use client";

import { trackConversionClient } from "@/lib/analytics";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface CourseDate {
  _id: string;
  date: string;
  time: string;
  location: string;
  remainingSeats: number;
  soldOut?: boolean;
  hidden?: boolean;
  price?: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    _id: string;
    name: string;
    code?: string;
    price: number;
  };
  courseDates: CourseDate[];
  preselectedDateId?: string;
}

// Payment Form Component
function PaymentForm({
  totalPrice,
  onSuccess,
  onBack,
  formData,
  course,
}: {
  totalPrice: number;
  onSuccess: (paymentIntentId: string) => void;
  onBack: () => void;
  formData: any;
  course: any;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError("Payment system is loading. Please wait...");
      return;
    }

    setProcessing(true);
    setError("");

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || "Payment failed");
        setProcessing(false);
        return;
      }

      const { error: confirmError, paymentIntent } =
        await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: window.location.origin + "/booking-success",
          },
          redirect: "if_required",
        });

      if (confirmError) {
        setError(confirmError.message || "Payment failed");
        setProcessing(false);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        onSuccess(paymentIntent.id);
      } else {
        // Handle other payment statuses
        setError("Payment was not completed. Please try again.");
        setProcessing(false);
      }
    } catch (err: any) {
      setError(err.message || "Payment failed");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4 pb-4">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-black/60 hover:text-black mb-4 cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      <h3 className="text-lg font-bold">Payment Details</h3>

      <div className="bg-black/5 p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total Amount:</span>
          <span className="text-2xl font-bold">A${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="border border-black/20 rounded-xl p-4 min-h-[200px]">
        <PaymentElement />
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full py-4 bg-black text-white rounded-full font-bold hover:bg-black/90 transition-all disabled:opacity-50 cursor-pointer text-lg"
      >
        {processing
          ? "Processing Payment..."
          : `Pay A$${totalPrice.toFixed(2)}`}
      </button>

      <p className="text-xs text-center text-black/60 pb-2">
        Your payment is secured by Stripe. Your card details are never stored on
        our servers.
      </p>
    </form>
  );
}

export default function BookingModal({
  isOpen,
  onClose,
  course,
  courseDates,
  preselectedDateId,
}: BookingModalProps) {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    attendeeName: "",
    attendeeEmail: "",
    attendeePhone: "",
    isGroupBooking: false,
    organization: "",
    numberOfParticipants: "1",
    selectedDate: "",
    selectedTime: "",
    selectedLocation: "",
    courseDateId: "",
    discountCode: "",
    message: "",
  });
  const [discountData, setDiscountData] = useState<any>(null);
  const [discountLoading, setDiscountLoading] = useState(false);
  const [discountError, setDiscountError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [purchaseWarning, setPurchaseWarning] = useState("");

  // Calculate prices
  const selectedCourseDate = courseDates.find(
    (d) => d._id === formData.courseDateId
  );
  const basePrice = selectedCourseDate?.price || course.price;
  let discountAmount = 0;

  if (discountData && discountData.valid) {
    if (discountData.discountCode.discountType === "percentage") {
      discountAmount =
        (basePrice * discountData.discountCode.discountValue) / 100;
    } else {
      discountAmount = discountData.discountCode.discountValue;
    }
    discountAmount = Math.min(discountAmount, basePrice);
  }

  const totalPrice = basePrice - discountAmount;

  // Reset modal state when opening/closing
  useEffect(() => {
    if (isOpen) {
      // Always start at Step 1
      setStep(1);

      // Pre-populate user data if logged in
      const userData: any = {};
      if (session?.user) {
        userData.attendeeEmail = session.user.email || "";
        userData.attendeeName = session.user.name || "";
        if ((session.user as any).phone) {
          userData.attendeePhone = (session.user as any).phone;
        }
      }

      // Pre-select date if preselectedDateId is provided
      if (preselectedDateId) {
        const preselectedDate = courseDates.find(
          (d) => d._id === preselectedDateId
        );
        if (preselectedDate) {
          setFormData((prev) => ({
            ...prev,
            ...userData,
            courseDateId: preselectedDate._id,
            selectedDate: preselectedDate.date,
            selectedTime: preselectedDate.time,
            selectedLocation: preselectedDate.location,
          }));
          return;
        }
      }

      // If no preselected date, just set user data
      if (session?.user) {
        setFormData((prev) => ({
          ...prev,
          ...userData,
        }));
      }
    }
  }, [isOpen, preselectedDateId, courseDates, session]);

  // Check for duplicate purchase when group booking changes
  useEffect(() => {
    if (formData.attendeeEmail && step === 2) {
      checkDuplicatePurchase();
    }
  }, [formData.isGroupBooking, formData.attendeeEmail, step]);

  const handleDiscountValidation = async () => {
    if (!formData.discountCode.trim()) {
      setDiscountData(null);
      setDiscountError("");
      return;
    }

    setDiscountLoading(true);
    setDiscountError("");

    try {
      const response = await fetch("/api/discount-codes/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: formData.discountCode,
          courseId: course._id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setDiscountData(data);
        setDiscountError("");
      } else {
        setDiscountData(null);
        setDiscountError(data.error || "Invalid discount code");
      }
    } catch (err) {
      setDiscountData(null);
      setDiscountError("Failed to validate discount code");
    } finally {
      setDiscountLoading(false);
    }
  };

  const checkDuplicatePurchase = async () => {
    // Validate email is provided
    if (!formData.attendeeEmail) {
      setPurchaseWarning("");
      return true; // Skip check if no email yet
    }

    try {
      const response = await fetch("/api/user/check-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course._id,
          isGroupBooking: formData.isGroupBooking,
          email: formData.attendeeEmail, // Pass the email from form
        }),
      });

      const data = await response.json();

      if (data.alreadyPurchased) {
        setPurchaseWarning(data.message);
        return false;
      }

      setPurchaseWarning("");
      return true;
    } catch (err) {
      console.error("Failed to check purchase:", err);
      setPurchaseWarning("");
      return true; // Allow purchase if check fails
    }
  };

  const createPaymentIntent = async () => {
    // Check for duplicate purchase
    const canPurchase = await checkDuplicatePurchase();
    if (!canPurchase) {
      setError(purchaseWarning);
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalPrice,
          courseId: course._id,
          courseName: course.name,
          courseDate: formData.selectedDate,
          attendeeEmail: formData.attendeeEmail,
          discountCode: discountData?.valid ? formData.discountCode : "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setClientSecret(data.clientSecret);
        setStep(4);
      } else {
        setError(data.error || "Failed to initialize payment");
      }
    } catch (err) {
      setError("Failed to initialize payment");
    }
  };

  const handlePaymentSuccess = async (paymentId: string) => {
    setPaymentIntentId(paymentId);
    setSubmitting(true);
    setError("");

    try {
      const bookingData = {
        courseId: course._id,
        courseDateId: formData.courseDateId,
        attendeeName: formData.attendeeName,
        attendeeEmail: formData.attendeeEmail,
        attendeePhone: formData.attendeePhone,
        isGroupBooking: formData.isGroupBooking,
        organization: formData.organization || undefined,
        numberOfParticipants: parseInt(formData.numberOfParticipants),
        selectedDate: formData.selectedDate,
        selectedTime: formData.selectedTime,
        selectedLocation: formData.selectedLocation,
        discountCode: discountData?.valid ? formData.discountCode : undefined,
        discountAmount: discountData?.valid ? discountAmount : 0,
        message: formData.message || undefined,
        paymentIntentId: paymentId,
        paymentStatus: "paid",
      };

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        // Track enrollment conversion
        await trackConversionClient("enrollment", {
          courseName: course.name,
          courseId: course._id,
          bookingNumber: data.bookingNumber,
          totalPrice: totalPrice,
          isGroupBooking: formData.isGroupBooking,
          numberOfParticipants: parseInt(formData.numberOfParticipants),
        });

        // Redirect to invoice page
        window.location.href = `/invoice/${data.bookingNumber}`;
      } else {
        setError(data.error || "Failed to create booking");
        setSubmitting(false);
      }
    } catch (err) {
      setError("Failed to create booking");
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-black/60">
            Check your email for confirmation details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-hidden">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col my-4">
        <div className="flex justify-between items-center px-6 pt-6 pb-4 flex-shrink-0 border-b border-black/5">
          <h2 className="text-2xl font-bold">Book: {course.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer flex-shrink-0"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className="overflow-y-auto px-6 py-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-400"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#d1d5db #f3f4f6" }}
        >
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {/* Step 1: Select Date */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Select Course Date</h3>
                <div className="space-y-3">
                  {courseDates
                    .filter((d) => !d.soldOut)
                    .map((courseDate) => (
                      <label
                        key={courseDate._id}
                        className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.courseDateId === courseDate._id
                            ? "border-black bg-black/5"
                            : "border-black/20 hover:border-black/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="courseDate"
                          value={courseDate._id}
                          checked={formData.courseDateId === courseDate._id}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              courseDateId: e.target.value,
                              selectedDate: courseDate.date,
                              selectedTime: courseDate.time,
                              selectedLocation: courseDate.location,
                            });
                          }}
                          className="sr-only"
                        />
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold">
                              {new Date(courseDate.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                            <div className="text-sm text-black/60">
                              {courseDate.hidden
                                ? courseDate.location
                                : `${courseDate.time} • ${courseDate.location}`}
                            </div>
                            <div className="text-sm text-black/60">
                              {courseDate.remainingSeats} seats remaining
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-xl">
                              A${courseDate.price || course.price}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.courseDateId}
                  className="w-full py-3 bg-pink text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-fade transition-all cursor-pointer"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Your Details */}
            {step === 2 && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-black/60 hover:text-black mb-4 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>

                <h3 className="text-lg font-bold">Your Details</h3>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.attendeeName}
                    onChange={(e) =>
                      setFormData({ ...formData, attendeeName: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.attendeeEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        attendeeEmail: e.target.value,
                      })
                    }
                    required
                    readOnly={!!session?.user}
                    className={`w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 ${
                      session?.user ? "bg-gray-50 cursor-not-allowed" : ""
                    }`}
                    placeholder="john@example.com"
                  />
                  {session?.user && (
                    <p className="text-xs text-black/60 mt-1">
                      Email is pre-filled from your account
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.attendeePhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        attendeePhone: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="0400 000 000"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isGroupBooking"
                    checked={formData.isGroupBooking}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isGroupBooking: e.target.checked,
                      })
                    }
                    className="w-4 h-4 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="isGroupBooking"
                    className="text-sm font-semibold cursor-pointer"
                  >
                    This is a group booking
                  </label>
                </div>

                {formData.isGroupBooking && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Number of Participants
                        {selectedCourseDate && (
                          <span className="ml-2 text-xs font-normal text-black/60">
                            ({selectedCourseDate.remainingSeats} seat
                            {selectedCourseDate.remainingSeats !== 1
                              ? "s"
                              : ""}{" "}
                            available)
                          </span>
                        )}
                      </label>
                      <input
                        type="number"
                        value={formData.numberOfParticipants}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            numberOfParticipants: e.target.value,
                          })
                        }
                        min="1"
                        max={selectedCourseDate?.remainingSeats}
                        className="w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                      />
                      {selectedCourseDate &&
                        parseInt(formData.numberOfParticipants) >
                          selectedCourseDate.remainingSeats && (
                          <p className="text-red-600 text-sm mt-2">
                            ⚠️ Only {selectedCourseDate.remainingSeats} seat
                            {selectedCourseDate.remainingSeats !== 1
                              ? "s"
                              : ""}{" "}
                            remaining
                          </p>
                        )}
                    </div>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => {
                    // Validate seat availability for group bookings
                    if (formData.isGroupBooking && selectedCourseDate) {
                      const participants =
                        parseInt(formData.numberOfParticipants) || 1;
                      if (participants > selectedCourseDate.remainingSeats) {
                        setError(
                          `Not enough seats available. Only ${
                            selectedCourseDate.remainingSeats
                          } seat${
                            selectedCourseDate.remainingSeats !== 1 ? "s" : ""
                          } remaining.`
                        );
                        return;
                      }
                    }
                    setError("");
                    setStep(3);
                  }}
                  className="w-full py-3 bg-pink text-white rounded-full font-bold hover:bg-pink-fade transition-all cursor-pointer"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 3: Discount Code & Summary */}
            {step === 3 && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-black/60 hover:text-black mb-4 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>

                <h3 className="text-lg font-bold">Discount Code (Optional)</h3>

                {purchaseWarning && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">⚠️ {purchaseWarning}</p>
                    <p className="text-sm mt-1">
                      Please check your email for the previous booking
                      confirmation or contact support if you need assistance.
                    </p>
                  </div>
                )}

                <div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.discountCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          discountCode: e.target.value.toUpperCase(),
                        })
                      }
                      onBlur={handleDiscountValidation}
                      placeholder="Enter discount code"
                      className="flex-1 px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 uppercase font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleDiscountValidation}
                      disabled={discountLoading}
                      className="px-6 py-3 bg-black/10 text-black rounded-xl hover:bg-black/20 transition-all font-semibold cursor-pointer disabled:opacity-50"
                    >
                      {discountLoading ? "Checking..." : "Apply"}
                    </button>
                  </div>

                  {discountError && (
                    <p className="text-red-600 text-sm mt-2">{discountError}</p>
                  )}

                  {discountData?.valid && (
                    <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm font-semibold">
                        ✓ {discountData.discountCode.description} - Save A$
                        {discountAmount.toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-black/5 p-6 rounded-xl">
                  <h4 className="font-bold mb-4">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Course:</span>
                      <span className="font-semibold">{course.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-semibold">
                        {formData.selectedDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-semibold">
                        {formData.selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span className="font-semibold">
                        {formData.selectedLocation}
                      </span>
                    </div>
                    <div className="border-t border-black/10 my-3"></div>
                    <div className="flex justify-between">
                      <span>Base Price:</span>
                      <span className="font-semibold">
                        A${basePrice.toFixed(2)}
                      </span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount:</span>
                        <span className="font-semibold">
                          -A${discountAmount.toFixed(2)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-black/10">
                      <span>Total:</span>
                      <span>A${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-black/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
                    placeholder="Any special requirements or questions?"
                  />
                </div>

                <button
                  type="button"
                  onClick={createPaymentIntent}
                  disabled={!!purchaseWarning}
                  className="w-full py-4 bg-pink text-white rounded-full font-bold hover:bg-pink-fade transition-all cursor-pointer text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm
                  totalPrice={totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onBack={() => setStep(3)}
                  formData={formData}
                  course={course}
                />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
