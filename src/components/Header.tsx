export const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-soft border-b border-primary/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/49a2cc1a-619f-4ae4-9f1d-f0212b994ca8.png" 
            alt="IranPharma" 
            className="h-12 w-auto object-contain"
          />
          <div className="text-right">
            <h1 className="text-xl font-bold text-primary-foreground">
              دستیار هوشمند نمایشگاه
            </h1>
            <p className="text-sm text-primary-foreground/80">
              پایداری، تاب‌آوری و نوآوری در زنجیره تأمین دارو
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};