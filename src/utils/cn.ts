/** Merge truthy classnames */
const cn = (...args: (string | number | boolean | null | undefined)[]) => {
  return args.filter(Boolean).join(" ");
};

export { cn };
