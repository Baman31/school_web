interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  
  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
