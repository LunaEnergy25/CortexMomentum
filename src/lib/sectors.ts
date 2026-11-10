// Sectors offered by the read-request form; the API accepts only these.
// One-page read (public/reads) shown right after the form is sent.
export const SECTOR_READS: Record<string, string> = {
  "Data centers & large-load power": "/reads/data-centers.pdf",
  "Battery storage": "/reads/battery-storage.pdf",
  "Solar": "/reads/solar.pdf",
  "Gas turbines, grid equipment and firm capacity": "/reads/firm-power.pdf",
  "Deep-tech or other": "/reads/cross-market.pdf",
};

export const SECTORS = [
  "Data centers & large-load power",
  "Battery storage",
  "Solar",
  "Gas turbines, grid equipment and firm capacity",
  "Deep-tech or other",
];
