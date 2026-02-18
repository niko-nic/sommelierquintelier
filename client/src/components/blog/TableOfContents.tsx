import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

interface TableOfContentsProps {
  sections: Array<{
    title: string;
    id: string;
  }>;
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile: Collapsible card */}
      <Card className="lg:hidden mb-8" data-testid="card-toc-mobile">
        <CardContent className="p-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 w-full text-left font-medium mb-2"
            data-testid="button-toc-toggle"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <span>{t('blog.tableOfContents')}</span>
          </button>
          {isOpen && (
            <nav className="mt-4 space-y-2" data-testid="nav-toc-mobile">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(section.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  data-testid={`button-toc-item-${index}`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          )}
        </CardContent>
      </Card>

      {/* Desktop: Sticky sidebar */}
      <aside className="hidden lg:block" data-testid="aside-toc-desktop">
        <div className="sticky top-24">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-medium">{t('blog.tableOfContents')}</h3>
              </div>
              <nav className="space-y-2" data-testid="nav-toc-desktop">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                    data-testid={`button-toc-item-${index}`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
      </aside>
    </>
  );
}
