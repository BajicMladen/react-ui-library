export enum BUTTON_VARIANT_TYPE {
  PRIMARY_VELVET = "primary-velvet",
  SECONDARY_VELVET = "secondary-velvet",
  PRIMARY_TEAL = "primary-teal",
  SECONDARY_TEAL = "secondary-teal",
}

export const BUTTON_CLASSES: Record<string, string> = {
  [BUTTON_VARIANT_TYPE.PRIMARY_VELVET]: [
    "text-white",
    "bg-velvet-plum-800",
    "hover:bg-velvet-plum-900",
  ].join(" "),
  [BUTTON_VARIANT_TYPE.SECONDARY_VELVET]: [
    "bg-white",
    "text-velvet-plum-800",
    "border-2",
    "border-velvet-plum-800",
    "hover:bg-velvet-plum-200",
  ].join(" "),
  [BUTTON_VARIANT_TYPE.PRIMARY_TEAL]: [
    "text-white",
    "bg-silent-teal-500",
    "hover:bg-silent-teal-500",
  ].join(" "),
  [BUTTON_VARIANT_TYPE.SECONDARY_TEAL]: [
    "bg-white",
    "text-silent-teal-500",
    "border-2",
    "border-silent-teal-500",
    "hover:bg-silent-teal-200",
  ].join(" "),
};
