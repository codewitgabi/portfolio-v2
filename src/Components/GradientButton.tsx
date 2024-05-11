function GradientButton({
  text,
  className,
  href
}: {
  text: string;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`bg-gradient-to-r from-[#194BFD] to-[#AD13FB] text-[0.85rem] rounded-full py-2 px-4 ${className}`}
    >
      {text}
    </a>
  );
}

export default GradientButton;
