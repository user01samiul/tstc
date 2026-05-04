export type PreConSection = {
  id: string;
  label: string;
  navLabel?: string;
};

export const PRE_CON_SECTIONS: PreConSection[] = [
  { id: "tgs", label: "Traffic & Pedestrian Guidance Scheme (TGS)", navLabel: "Traffic & Pedestrian Guidance Scheme (TGS)" },
  { id: "rol-applications", label: "ROL Applications" },
  { id: "council-applications", label: "Council Applications" },
  { id: "staging", label: "Pre Construction Planning and Staging" },
  { id: "tmp", label: "Traffic Management Plans (TMPs)" },
  { id: "traffic-staging-cad", label: "Traffic Staging Plans – Design (CAD)" },
  { id: "traffic-modelling-cad", label: "Traffic Modelling (CAD)" },
  { id: "sidra", label: "SIDRA Traffic Modelling / Analysis" },
  { id: "risk-assessment", label: "Risk Assessment" },
  { id: "dilapidation", label: "Dilapidation Report" },
  { id: "temporary-barriers", label: "Temporary Barrier Design Statements" },
  { id: "swept-path", label: "Swept Path Analysis" },
  { id: "application-management", label: "TfNSW and Council Application Management", navLabel: "TfNSW & Council App. Management" },
  { id: "bus-police-approvals", label: "Bus and Police Approvals" },
];
