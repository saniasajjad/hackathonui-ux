import Link from "next/link"

export default function Footer() {
  const footerLinks = {
    about: {
      title: "About",
      links: [
        { label: "How it works", href: "/how-it-works" },
        { label: "Featured", href: "/featured" },
        { label: "Partnership", href: "/partnership" },
        { label: "Business Relation", href: "/business" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { label: "Events", href: "/events" },
        { label: "Blog", href: "/blog" },
        { label: "Podcast", href: "/podcast" },
        { label: "Invite a friend", href: "/invite" },
      ],
    },
    socials: {
      title: "Socials",
      links: [
        { label: "Discord", href: "/discord" },
        { label: "Instagram", href: "/instagram" },
        { label: "Twitter", href: "/twitter" },
        { label: "Facebook", href: "/facebook" },
      ],
    },
  }

  return (
    <footer className="w-full bg-white px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand and Vision */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-2xl font-bold text-[#3563E9]">
              MORENT
            </Link>
            <p className="mt-4 text-base text-muted-foreground">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-2 lg:col-span-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-base font-semibold">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">©2022 MORENT. All rights reserved</p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy & Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
