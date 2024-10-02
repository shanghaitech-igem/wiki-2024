import React from "react";

export interface CardData {
  number: string;
  subtitle: string;
  title: string;
  imgSrc: string;
  content: string | React.ReactNode;
  reverse?: boolean;
  readmoreURL?: string;
}

export const cardData: CardData[] = [
  {
    number: "01",
    subtitle: "FROM LAB TO DAILY CARE",
    title: "Pioneering a New Era in Personal Care",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/description",
    content: `Itching, though often perceived as a minor issue, can have a
    significant impact on people’s quality of life. Persistent itching not
    only causes intense discomfort but also leads to involuntary
    scratching.`,
  },
  {
    number: "02",
    subtitle: "NAUGHTY SCRATCHING",
    title: "Scratching is a Natural Response to Itching",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/description",
    content: `Scratching not only worsens skin damage but can also result in
    infections, inflammation, and even scarring, which can severely affect
    both the appearance and mental well-being of the patient.`,
    reverse: true,
  },
  {
    number: "03",
    subtitle: "ITCHING AND HEALTH",
    title: "Itching Can Be a Sign of Serious Conditions",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/description",
    content: `For certain vulnerable groups, such as individuals with weakened
    immune systems or the elderly, itching can be a sign of more serious
    underlying health conditions, such as skin disorders or complications
    from diabetes.`,
  },
  {
    number: "04",
    subtitle: "THE IMPORTANCE OF ITCHING",
    title: "Addressing Itching Is Crucial for Overall Health",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/description",
    content: `
        Thus, addressing itching in a timely and effective manner is not only
        crucial for improving patients’ quality of life but also vital for
        ensuring their overall health.
      `,
    reverse: true,
  },
  {
    number: "05",
    subtitle: "LIMITATIONS OF CURRENT TREATMENTS",
    title: "Challenges with Existing Anti-Itch Products",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/human-practices",
    content: `
        Although a wide range of anti-itch products are available, most focus on
        using antibiotics and other medications to directly target pathogens.
        While effective in treating the underlying causes, these treatments
        often do not provide immediate or substantial relief from the itching,
        leaving patients to endure discomfort during the healing process.
      `,
  },
  {
    number: "06",
    subtitle: "SIDE EFFECTS OF TREATMENTS",
    title: "Hormonal Treatments and Their Risks",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/human-practices",
    content: `
        Additionally, some products that claim to relieve itching contain
        hormones, which can lead to side effects such as skin thinning and
        hyperpigmentation with prolonged use, while offering limited relief.
      `,
    reverse: true,
  },
  {
    number: "07",
    subtitle: "OUR INNOVATIVE APPROACH",
    title: "Developing Green, Safe Inhibitors",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/design",
    content: `
        Our project recognizes the critical importance of addressing itching and
        is dedicated to developing green, safe inhibitors that scientifically
        address persistent itching caused by Staphylococcus aureus. This is
        achieved through an in-depth understanding of the V8 protease mechanism.
      `,
  },
  {
    number: "08",
    subtitle: "IMPROVING QUALITY OF LIFE",
    title: "Innovative Solutions for Personal Care",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/implementation",
    content: `
        Our solution not only alleviates patient discomfort and improves their
        quality of life but also introduces an innovative approach to personal
        care product development, breathing new life into the skin health
        industry.
      `,
    reverse: true,
  },
  {
    number: "09",
    subtitle: "OUR PHILOSOPHY",
    title: "Managing Bacteria for Better Health",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/design",
    content: (
      <>
        <p>
          Blind sterilization of bacteria isn't always ideal, as it can lead to
          antibiotic overuse. Staphylococcus aureus is common and can't be
          completely eradicated. We view bacteria as part of the human ecosystem
          and focus on reducing their harmful effects to prevent severe
          diseases.
        </p>
        <p>
          Our products aim to manage itching from Staphylococcus aureus,
          stopping issues from escalating.
        </p>
      </>
    ),
  },
  {
    number: "10",
    subtitle: "APPLICATION",
    title: "Creating Specialized Cosmeceuticals",
    imgSrc: "server/home/scrath-1.png",
    readmoreURL: "/application",
    content: `
        We aim to develop a safe product that specifically targets persistent
        itching caused by Staphylococcus aureus. By combining our screened
        effective compounds with existing skincare products, we strive to
        create specialized cosmeceuticals that suppress itching early on,
        thereby reducing the harm caused by scratching.
      `,
    reverse: true,
  },
];
