export default function LogoBrand({ size = "small" }: { size?: "small" | "large" }) {
  const containerHeight = size === "small" ? "h-8 md:h-9" : "h-14 md:h-16";
  
  return (
    <div className={`flex items-center ${containerHeight}`}>
      <img
        src="/images/logo.png"
        alt="Star Lab Holdings"
        className={`${size === "small" ? "h-8 md:h-9" : "h-14 md:h-16"} w-auto object-contain`}
        loading="eager"
      />
    </div>
  );
}
