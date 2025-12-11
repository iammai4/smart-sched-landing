import logoPath from "@assets/PLAN-IT_1765394831392.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoPath}
              alt="Plan-it Logo"
              className="h-10"
              data-testid="img-footer-logo"
            />
            <div className="h-6 w-px bg-border hidden md:block" />
            <span className="text-sm text-muted-foreground">
              A school project by SAIT students
            </span>
          </div>
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            &copy; {currentYear} Plan-it. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
