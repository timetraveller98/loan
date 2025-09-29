import LoanDeatial from "./Manage";

interface DynamicProps {
  params: { id: string };
}

const services = [
  { name: "Property Loan", id: "property-loan" },
  { name: "Business Loan", id: "business-loan" },
  { name: "Private Loan", id: "private-loan" },
  { name: "Vehicle Loan", id: "vehicle-loan" },
  { name: "Travel Loan", id: "travel-loan" },
  { name: "Personal Loan", id: "personal-loan" },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: DynamicProps) {
  const { id } = await params;

  try {
    const user = services.find((item) => item.id === id);

    if (!user) {
      return {
        title: "Service Not Found",
        description: "The requested service could not be found.",
      };
    }

    return {
      title: `${user.name} | Loan Details`,
      description: `Details about ${user.name}.`,
      keywords: [user.name, "loan", "services", "Next.js SEO"],
      openGraph: {
        title: `${user.name} | Loan Details`,
        description: `Explore details about ${user.name}.`,
        siteName: "uEngage",
        images: [
          {
            url: "/logo.svg",
            width: 1200,
            height: 630,
            alt: `${user.name} preview`,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${user.name} | Loan Details`,
        description: `Check out ${user.name} details on My App.`,
        images: ["/logo.svg"],
      },
      robots: "index, follow",
    };
  } catch {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }
}

const Dynamic = async ({ params }: DynamicProps) => {
  const { id } = await params;
  const details = services.find((item) => item.id === id);

  if (!details) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <LoanDeatial details={details.name} />
    </div>
  );
};

export default Dynamic;
