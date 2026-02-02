"use client";

export default function CopyrightYear() {
  const currentYear = new Date().getFullYear();

  return <span>{currentYear}</span>;
}
