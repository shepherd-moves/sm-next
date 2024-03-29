import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AccordionItem from "../../components/AccordionItem";

const data = [
  {
    id: 1,
    title: "How do you calculate the job length on the day of the move?",
    info: "The time starts when the truck arrives at the pickup location and ends after the bill has been paid rounded up to the nearest 15 minutes.",
  },
  {
    id: 2,
    title: "How much is the deposit?",
    info: "The deposit covers the minimum 2 hour charge plus the travel fee.",
  },
  {
    id: 3,
    title: "What happens to my deposit on cancelled or delayed jobs?",
    info: "Deposits are non-refundable before 48 hours of the booked moving time. If the job is delayed due to unforeseen circumstances e.g., positive covid tests, personal or medical reasons. In these cases, the deposit is transferred to a new date without any extra charges.",
  },
  {
    id: 4,
    title: "Are the boxes that are overfilled alright to be moved?",
    info: "Try minimise the amount that overflows from boxes. They are much easier and quicker to move and pack into the truck if there are no protrusions. Ensure they are adequately taped and labelled to save yourself some time organising at the drop-off.",
  },
  {
    id: 5,
    title:
      "Are there any extra charges that you might add on the day of the move?",
    info: "Absolutely not. We charge based on the items included in the estimate signed by you.",
  },
  {
    id: 6,
    title: "What could make my move take longer than the estimated time?",
    info: "Common factors include; having more items than originally listed in your inventory list, having furniture that needs to be disassembled and assembled, not having an elevator booking for apartment moves, longer than expected access to either property from the truck, traffic and weather conditions.",
  },
  {
    id: 7,
    title:
      "I’m only moving 1 item, is there a lower fee for much smaller moves?",
    info: "15-minute increments are more accurate and the price reflects better for the work our teams complete. We try not to be like other companies that over-charge for their services.",
  },
  {
    id: 8,
    title: "What is ‘travel time’ and why is it an extra cost?",
    info: "‘Travel time’ is a separate and fixed fee on top of the moving time depending on how far you are from our office in Glen Iris. It is the time it takes for our team to get to you, and for them to travel back from the drop-off address.",
  },
  {
    id: 9,
    title: "Do you have different sized trucks?",
    info: "Yes. We have trucks ranging in size from 20m3 to 45m3. The easiest way to find out which size truck you need for your move is to let us know exactly what you need moved, and we can recommend the right size.",
  },
  {
    id: 10,
    title: "How do you prepare for a fridge to be moved?",
    info: "Ensure that the contents of the fridge have been emptied and properly bagged. Use masking tape on the doors to ensure there is no risk of them opening during the move. Tape the power cable to the back of the fridge to ensure no damage.",
  },
  {
    id: 11,
    title: "Why do you charge in 15-minute increments?",
    info: "15-minute increments are more accurate and the price reflects better for each job. Some companies charge by the half hour and round it up and you end up paying an extra 20 or 25 minutes",
  },
  {
    id: 12,
    title:
      "Can you transport Pianos? Are there any extra charges for moving pianos?",
    info: "We can transport specific pianos, and yes there is an extra charge. We only transport upright pianos. Anything larger than an upright piano is too susceptible to damages. When booking a job, let us know if you need a piano moved and we can let you know the options.",
  },
  {
    id: 13,
    title: "How do you safely transport Artwork?",
    info: "Artwork is wrapped in our heavy duty moving blankets to ensure safety during transit. For particularly delicate pieces of art, we recommend using specific packing materials that we can supply if necessary.",
  },
  {
    id: 14,
    title: "What days are best for moving?",
    info: "During the working week is the best time for a move. Between Monday and Friday, we have a lower rate than Saturdays and again on Sundays. In terms of time, the earlier in the day it is, the better. Having your move completed earlier in the day gives you the peace of mind you’ll need to get a good night sleep in your new home.",
  },
  {
    id: 15,
    title: "What happens if my furniture is damaged during my move?",
    info: "​The removalists at Shepherd Moves are well trained and experienced, however please understand that accidents may occur during your move. Where damaged is caused by handling and/or transporting your goods, we offer to repair, replace or compensate for any damages caused by us.",
  },
];

function About() {
  const [questions, setQuestions]: any = useState(data);
  return (
    <>
      <div>
        <Head>
          <title>
            About Shepherd Moves - Melbourne's Leading Furniture Removalists
          </title>
          <meta
            property="og:title"
            content="About Shepherd Moves - Melbourne's Leading Furniture Removalists"
          />
          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you calculate the job length on the day of the move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time starts when the truck arrives at the pickup location and ends after the bill has been paid rounded up to the nearest 15 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "How much is the deposit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The deposit covers the minimum 2 hour charge plus the travel fee."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my deposit on cancelled or delayed jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deposits are non-refundable before 48 hours of the booked moving time. In the event of unforeseen circumstances, like positive covid tests or personal reasons, the deposit is transferred to a new date without extra charges."
          }
        },
        {
          "@type": "Question",
          "name": "Are the boxes that are overfilled alright to be moved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Try to minimize overflow from boxes. They're easier and quicker to move if there are no protrusions. Ensure they are adequately taped and labelled."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any extra charges that you might add on the day of the move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely not. We charge based on the items included in the estimate signed by you."
          }
        },
        {
          "@type": "Question",
          "name": "What could make my move take longer than the estimated time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common factors include more items than originally listed, needing to disassemble and assemble furniture, not having an elevator booking for apartment moves, longer than expected access to either property, traffic, and weather conditions."
          }
        },
        {
          "@type": "Question",
          "name": "I’m only moving 1 item, is there a lower fee for much smaller moves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "15-minute increments are more accurate and the price reflects better for the work our teams complete. We try not to be like other companies that over-charge for their services."
          }
        },
        {
          "@type": "Question",
          "name": "What is ‘travel time’ and why is it an extra cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "‘Travel time’ is a separate and fixed fee on top of the moving time depending on how far you are from our office in Glen Iris. It is the time it takes for our team to get to you, and for them to travel back from the drop-off address."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have different sized trucks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have trucks ranging in size from 20m3 to 45m3. To find out which size truck you need for your move, let us know exactly what you need moved, and we can recommend the right size."
          }
        },
        {
          "@type": "Question",
          "name": "How do you prepare for a fridge to be moved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ensure that the contents of the fridge have been emptied and properly bagged. Use masking tape on the doors to ensure there is no risk of them opening during the move. Tape the power cable to the back of the fridge to ensure no damage."
          }
        },
        {
          "@type": "Question",
          "name": "Why do you charge in 15-minute increments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "15-minute increments are more accurate and the price reflects better for each job. Some companies charge by the half hour and round it up, resulting in you paying for extra time not utilized."
          }
        },
        {
          "@type": "Question",
          "name": "Can you transport Pianos? Are there any extra charges for moving pianos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can transport specific pianos, and there is an extra charge. We only transport upright pianos. Anything larger than an upright piano is too susceptible to damages. When booking, let us know if a piano is included and we will provide options."
          }
        },
        {
          "@type": "Question",
          "name": "How do you safely transport Artwork?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Artwork is wrapped in our heavy-duty moving blankets to ensure safety during transit. For particularly delicate pieces, we recommend specific packing materials, which we can supply if necessary."
          }
        },
        {
          "@type": "Question",
          "name": "What days are best for moving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best time for a move is during the working week, Monday to Friday. We offer lower rates compared to weekends. In terms of time, the earlier in the day, the better, allowing you to settle in your new home sooner."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my furniture is damaged during my move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our removalists are trained and experienced, but accidents may occur. In case of damage caused by handling or transporting, we offer repair, replacement, or compensation for any damages caused by us."
          }
        }
        // Add more questions if necessary
      ]
    }
  `}
          </script>
        </Head>
        <meta
          name="description"
          content="Discover Shepherd Moves, a premier furniture removalist in Melbourne. Learn about our experienced team, efficient services, and customer-focused approach."
        />
      </div>
      {/*About Section*/}
      <section>
        <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 lg:grid">
          <div className="flex flex-col gap-10 lg:flex-row justify-between ">
            <div className="w-full lg:w-8/12 ">
              <Image
                className="w-[633px] h-[400px] object-cover rounded-lg"
                src="/about-hero.png"
                width={633}
                height={400}
                alt="Shepherd Moves friendly team beside one of our 4-tonne trucks"
              />
            </div>
            <div className="w-full lg:w-8/12 flex flex-col ">
              <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-black pb-4">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-black ">
                Based in the bustling city of Melbourne, Shepherd Moves is a
                moving company committed to providing a stress-free and seamless
                experience for our customers. Our team is made up of experienced
                professionals who are dedicated to ensuring that your belongings
                are handled with the utmost care and attention. We understand
                that moving can be overwhelming, which is why we strive to make
                the process as smooth and easy as possible for our customers. In
                addition to our commitment to providing exceptional service, we
                also pride ourselves on our reliability.
                <p className="mt-2">
                  We will always be on time and will do everything in our power
                  to make sure your move goes as smoothly as possible. We offer
                  a range of{" "}
                  <Link
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="/our-services/residential-homes-and-apartments"
                  >
                    services
                  </Link>{" "}
                  to meet the needs of our customers, including packing,
                  transportation, and storage solutions. Our team is fully
                  licensed and insured, so you can trust that your belongings
                  are in good hands when you choose to work with us. If you're
                  planning a move in the Melbourne area, we would love to hear
                  from you.{" "}
                  <Link
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>{" "}
                  to learn more about our{" "}
                  <Link
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    href="/our-services/residential-homes-and-apartments"
                  >
                    services
                  </Link>{" "}
                  and to schedule your move with Shepherd Moves
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*End About Section */}

      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Our Trusted Partners
        </h2>

        {/*Tree and Tribe */}
        <div className="grid bg-gray-100 rounded-lg gap-6 p-6 h-60 grid-cols-1 sm:content-evenly sm:h-40 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6 ">
          <div className="flex justify-center text-indigo-500">
            <Link href="https://www.treeandtribe.com.au/">
              <svg
                className="w-auto h-6 sm:h-8 lg:h-9"
                width="314"
                height="48"
                viewBox="0 0 314 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.696 47.704C10.6053 47.704 8.89867 47.0853 7.576 45.848C6.296 44.568 5.656 42.4987 5.656 39.64V20.696H0.92V19.096L2.648 18.968C4.39733 18.84 5.72 18.136 6.616 16.856C7.55467 15.5333 8.17333 13.6987 8.472 11.352H10.136V19.096H18.328V20.696H10.136V39.896C10.136 43.6507 11.4587 45.528 14.104 45.528C15.2133 45.528 16.1093 45.1653 16.792 44.44C17.4747 43.672 18.0933 42.7333 18.648 41.624L20.056 42.328C19.8 42.968 19.48 43.5653 19.096 44.12C18.7547 44.632 18.4133 45.08 18.072 45.464C17.3467 46.2747 16.5147 46.8507 15.576 47.192C14.68 47.5333 13.72 47.704 12.696 47.704ZM22.4795 47.192V45.72L23.5035 45.592C24.7408 45.4213 25.6795 45.2293 26.3195 45.016C27.0022 44.76 27.4715 44.2267 27.7275 43.416C27.9835 42.5627 28.1115 41.176 28.1115 39.256V25.944C28.1115 24.28 27.8768 23.064 27.4075 22.296C26.9808 21.528 26.3408 21.0587 25.4875 20.888C24.6342 20.6747 23.6315 20.568 22.4795 20.568V19.096C24.2288 19.096 25.9142 19.032 27.5355 18.904C29.1568 18.776 30.8422 18.584 32.5915 18.328L31.8875 25.688H32.1435C33.0822 22.8293 34.2342 20.824 35.5995 19.672C36.9648 18.52 38.4368 17.944 40.0155 17.944C41.8075 17.944 43.0022 18.392 43.5995 19.288C44.1968 20.1413 44.4955 20.9733 44.4955 21.784C44.4955 22.7227 44.2182 23.4907 43.6635 24.088C43.1088 24.6853 42.3622 24.984 41.4235 24.984C40.5275 24.984 39.8448 24.7707 39.3755 24.344C38.9062 23.9173 38.6715 23.4267 38.6715 22.872C38.6715 22.4453 38.7142 22.04 38.7995 21.656C38.9275 21.272 38.9915 20.9733 38.9915 20.76C38.9915 20.3333 38.6928 20.12 38.0955 20.12C37.4982 20.12 36.8582 20.3973 36.1755 20.952C35.5355 21.5067 34.9808 22.2747 34.5115 23.256C34.1275 24.0667 33.7648 24.9627 33.4235 25.944C33.0822 26.9253 32.8048 27.992 32.5915 29.144V39.256C32.5915 41.176 32.7195 42.5627 32.9755 43.416C33.2315 44.2267 33.6795 44.76 34.3195 45.016C35.0022 45.2293 35.9622 45.4213 37.1995 45.592L38.2235 45.72V47.192L30.3515 47L22.4795 47.192ZM62.021 47.704C59.205 47.704 56.7517 47.1067 54.661 45.912C52.5703 44.6747 50.9277 42.9893 49.733 40.856C48.581 38.68 48.005 36.2053 48.005 33.432C48.005 30.4453 48.645 27.8 49.925 25.496C51.205 23.1493 52.9117 21.3147 55.045 19.992C57.221 18.6267 59.6103 17.944 62.213 17.944C65.4983 17.944 68.0583 18.9893 69.893 21.08C71.7703 23.1707 72.709 25.9227 72.709 29.336C72.709 29.848 72.6877 30.2747 72.645 30.616C72.6023 30.9573 72.5597 31.192 72.517 31.32H53.189C53.1463 31.9173 53.125 32.5147 53.125 33.112C53.125 35.3733 53.4877 37.4853 54.213 39.448C54.9383 41.368 56.0263 42.904 57.477 44.056C58.9703 45.208 60.7837 45.784 62.917 45.784C64.9223 45.784 66.693 45.2293 68.229 44.12C69.8077 42.968 71.0237 41.2827 71.877 39.064L73.413 39.64C71.621 45.016 67.8237 47.704 62.021 47.704ZM62.213 19.544C59.5677 19.544 57.4983 20.4827 56.005 22.36C54.5543 24.2373 53.6583 26.7333 53.317 29.848H61.445C63.365 29.848 64.8157 29.6347 65.797 29.208C66.821 28.7387 67.5037 28.184 67.845 27.544C68.229 26.8613 68.421 26.2 68.421 25.56C68.421 23.6827 67.781 22.2107 66.501 21.144C65.221 20.0773 63.7917 19.544 62.213 19.544ZM92.521 47.704C89.705 47.704 87.2517 47.1067 85.161 45.912C83.0703 44.6747 81.4277 42.9893 80.233 40.856C79.081 38.68 78.505 36.2053 78.505 33.432C78.505 30.4453 79.145 27.8 80.425 25.496C81.705 23.1493 83.4117 21.3147 85.545 19.992C87.721 18.6267 90.1103 17.944 92.713 17.944C95.9983 17.944 98.5583 18.9893 100.393 21.08C102.27 23.1707 103.209 25.9227 103.209 29.336C103.209 29.848 103.188 30.2747 103.145 30.616C103.102 30.9573 103.06 31.192 103.017 31.32H83.689C83.6463 31.9173 83.625 32.5147 83.625 33.112C83.625 35.3733 83.9877 37.4853 84.713 39.448C85.4383 41.368 86.5263 42.904 87.977 44.056C89.4703 45.208 91.2837 45.784 93.417 45.784C95.4223 45.784 97.193 45.2293 98.729 44.12C100.308 42.968 101.524 41.2827 102.377 39.064L103.913 39.64C102.121 45.016 98.3237 47.704 92.521 47.704ZM92.713 19.544C90.0677 19.544 87.9983 20.4827 86.505 22.36C85.0543 24.2373 84.1583 26.7333 83.817 29.848H91.945C93.865 29.848 95.3157 29.6347 96.297 29.208C97.321 28.7387 98.0037 28.184 98.345 27.544C98.729 26.8613 98.921 26.2 98.921 25.56C98.921 23.6827 98.281 22.2107 97.001 21.144C95.721 20.0773 94.2917 19.544 92.713 19.544ZM198.259 47.704C196.168 47.704 194.461 47.0853 193.139 45.848C191.859 44.568 191.219 42.4987 191.219 39.64V20.696H186.483V19.096L188.211 18.968C189.96 18.84 191.283 18.136 192.179 16.856C193.117 15.5333 193.736 13.6987 194.035 11.352H195.699V19.096H203.891V20.696H195.699V39.896C195.699 43.6507 197.021 45.528 199.667 45.528C200.776 45.528 201.672 45.1653 202.355 44.44C203.037 43.672 203.656 42.7333 204.211 41.624L205.619 42.328C205.363 42.968 205.043 43.5653 204.659 44.12C204.317 44.632 203.976 45.08 203.635 45.464C202.909 46.2747 202.077 46.8507 201.139 47.192C200.243 47.5333 199.283 47.704 198.259 47.704ZM208.042 47.192V45.72L209.066 45.592C210.303 45.4213 211.242 45.2293 211.882 45.016C212.565 44.76 213.034 44.2267 213.29 43.416C213.546 42.5627 213.674 41.176 213.674 39.256V25.944C213.674 24.28 213.439 23.064 212.97 22.296C212.543 21.528 211.903 21.0587 211.05 20.888C210.197 20.6747 209.194 20.568 208.042 20.568V19.096C209.791 19.096 211.477 19.032 213.098 18.904C214.719 18.776 216.405 18.584 218.154 18.328L217.45 25.688H217.706C218.645 22.8293 219.797 20.824 221.162 19.672C222.527 18.52 223.999 17.944 225.578 17.944C227.37 17.944 228.565 18.392 229.162 19.288C229.759 20.1413 230.058 20.9733 230.058 21.784C230.058 22.7227 229.781 23.4907 229.226 24.088C228.671 24.6853 227.925 24.984 226.986 24.984C226.09 24.984 225.407 24.7707 224.938 24.344C224.469 23.9173 224.234 23.4267 224.234 22.872C224.234 22.4453 224.277 22.04 224.362 21.656C224.49 21.272 224.554 20.9733 224.554 20.76C224.554 20.3333 224.255 20.12 223.658 20.12C223.061 20.12 222.421 20.3973 221.738 20.952C221.098 21.5067 220.543 22.2747 220.074 23.256C219.69 24.0667 219.327 24.9627 218.986 25.944C218.645 26.9253 218.367 27.992 218.154 29.144V39.256C218.154 41.176 218.282 42.5627 218.538 43.416C218.794 44.2267 219.242 44.76 219.882 45.016C220.565 45.2293 221.525 45.4213 222.762 45.592L223.786 45.72V47.192L215.914 47L208.042 47.192ZM233.105 47.192V45.72L234.129 45.592C235.366 45.4213 236.305 45.2293 236.945 45.016C237.627 44.76 238.097 44.2267 238.353 43.416C238.609 42.5627 238.737 41.176 238.737 39.256V25.752C238.737 23.5333 238.267 22.1253 237.329 21.528C236.433 20.888 235.174 20.568 233.553 20.568H233.105V19.096C234.854 19.096 236.539 19.0533 238.161 18.968C239.782 18.84 241.467 18.6267 243.217 18.328V39.256C243.217 41.176 243.345 42.5627 243.601 43.416C243.857 44.2267 244.305 44.76 244.945 45.016C245.627 45.2293 246.587 45.4213 247.825 45.592L248.849 45.72V47.192L240.977 47L233.105 47.192ZM240.209 10.84C239.099 10.84 238.225 10.456 237.585 9.688C236.945 8.92 236.625 8.00267 236.625 6.936C236.625 5.82667 236.945 4.90933 237.585 4.184C238.225 3.416 239.099 3.032 240.209 3.032C241.446 3.032 242.342 3.416 242.897 4.184C243.494 4.90933 243.793 5.82667 243.793 6.936C243.793 8.00267 243.494 8.92 242.897 9.688C242.342 10.456 241.446 10.84 240.209 10.84ZM255.772 47.704V8.024C255.772 5.80533 255.303 4.39733 254.364 3.8C253.468 3.16 252.209 2.84 250.588 2.84H250.14V1.368C251.889 1.368 253.575 1.32533 255.196 1.24C256.817 1.112 258.503 0.898664 260.252 0.599998V21.976C261.404 20.7387 262.727 19.7573 264.22 19.032C265.713 18.3067 267.356 17.944 269.148 17.944C271.623 17.944 273.82 18.6053 275.74 19.928C277.703 21.2507 279.26 23.0427 280.412 25.304C281.564 27.5653 282.14 30.104 282.14 32.92C282.14 35.6507 281.564 38.1467 280.412 40.408C279.26 42.6267 277.681 44.3973 275.676 45.72C273.713 47.0427 271.452 47.704 268.892 47.704C267.1 47.704 265.436 47.32 263.9 46.552C262.364 45.784 261.127 44.9093 260.188 43.928L256.796 47.704H255.772ZM268.508 19.864C266.673 19.864 265.073 20.2907 263.708 21.144C262.385 21.9547 261.233 22.9573 260.252 24.152V41.432C260.977 42.5413 262.065 43.544 263.516 44.44C264.967 45.336 266.567 45.784 268.316 45.784C270.279 45.784 271.9 45.2293 273.18 44.12C274.46 42.968 275.42 41.432 276.06 39.512C276.7 37.5493 277.02 35.352 277.02 32.92C277.02 30.4453 276.7 28.2267 276.06 26.264C275.463 24.3013 274.524 22.744 273.244 21.592C272.007 20.44 270.428 19.864 268.508 19.864ZM301.896 47.704C299.08 47.704 296.627 47.1067 294.536 45.912C292.445 44.6747 290.803 42.9893 289.608 40.856C288.456 38.68 287.88 36.2053 287.88 33.432C287.88 30.4453 288.52 27.8 289.8 25.496C291.08 23.1493 292.787 21.3147 294.92 19.992C297.096 18.6267 299.485 17.944 302.088 17.944C305.373 17.944 307.933 18.9893 309.768 21.08C311.645 23.1707 312.584 25.9227 312.584 29.336C312.584 29.848 312.563 30.2747 312.52 30.616C312.477 30.9573 312.435 31.192 312.392 31.32H293.064C293.021 31.9173 293 32.5147 293 33.112C293 35.3733 293.363 37.4853 294.088 39.448C294.813 41.368 295.901 42.904 297.352 44.056C298.845 45.208 300.659 45.784 302.792 45.784C304.797 45.784 306.568 45.2293 308.104 44.12C309.683 42.968 310.899 41.2827 311.752 39.064L313.288 39.64C311.496 45.016 307.699 47.704 301.896 47.704ZM302.088 19.544C299.443 19.544 297.373 20.4827 295.88 22.36C294.429 24.2373 293.533 26.7333 293.192 29.848H301.32C303.24 29.848 304.691 29.6347 305.672 29.208C306.696 28.7387 307.379 28.184 307.72 27.544C308.104 26.8613 308.296 26.2 308.296 25.56C308.296 23.6827 307.656 22.2107 306.376 21.144C305.096 20.0773 303.667 19.544 302.088 19.544Z"
                  fill="#747882"
                />
                <path
                  d="M139.32 47.704C137.187 47.704 135.096 47.2347 133.048 46.296C131 45.3573 129.293 44.0347 127.928 42.328C126.605 40.6213 125.944 38.5947 125.944 36.248C125.944 34.2 126.392 32.3653 127.288 30.744C128.184 29.1227 129.357 27.6507 130.808 26.328C132.301 25.0053 133.901 23.7893 135.608 22.68C134.328 20.8027 133.304 19.2027 132.536 17.88C131.768 16.5147 131.213 15.2773 130.872 14.168C130.573 13.016 130.424 11.8427 130.424 10.648C130.424 8.42933 130.936 6.59467 131.96 5.144C132.984 3.65067 134.307 2.52 135.928 1.752C137.592 0.983999 139.384 0.599998 141.304 0.599998C143.864 0.599998 145.933 1.00533 147.512 1.816C149.091 2.62666 150.243 3.672 150.968 4.952C151.736 6.232 152.12 7.53333 152.12 8.856C152.12 10.6053 151.565 12.248 150.456 13.784C149.347 15.32 147.96 16.7493 146.296 18.072C144.632 19.352 142.989 20.4827 141.368 21.464C142.136 22.5307 142.989 23.6827 143.928 24.92C144.867 26.1573 145.891 27.544 147 29.08C149.176 32.0667 151.139 34.584 152.888 36.632C153.101 36.3333 153.293 36.056 153.464 35.8C153.635 35.5013 153.784 35.2453 153.912 35.032C155.619 32.2587 156.472 30.1893 156.472 28.824C156.472 27.928 156.109 27.2667 155.384 26.84C154.701 26.4133 153.677 26.136 152.312 26.008L150.392 25.816V24.216L158.776 24.408L165.752 24.216V25.752L163.448 26.264C161.869 26.6053 160.525 27.6293 159.416 29.336C158.349 31.0427 157.176 33.0907 155.896 35.48C155.683 35.9067 155.427 36.3547 155.128 36.824C154.872 37.2933 154.573 37.784 154.232 38.296C156.408 40.728 158.157 42.4347 159.48 43.416C160.803 44.3547 161.869 44.824 162.68 44.824C163.917 44.824 165.112 44.312 166.264 43.288L167.288 44.504C166.477 45.528 165.475 46.3173 164.28 46.872C163.085 47.4267 161.933 47.704 160.824 47.704C159.715 47.704 158.669 47.5973 157.688 47.384C156.707 47.1707 155.661 46.7227 154.552 46.04C153.485 45.3147 152.227 44.184 150.776 42.648C149.411 44.056 147.768 45.2507 145.848 46.232C143.971 47.2133 141.795 47.704 139.32 47.704ZM135.736 8.856C135.736 10.8187 136.099 12.6107 136.824 14.232C137.549 15.8533 138.723 17.7947 140.344 20.056C142.051 18.5627 143.395 17.24 144.376 16.088C145.357 14.936 146.04 13.784 146.424 12.632C146.808 11.48 147 10.2 147 8.792C147 7 146.509 5.528 145.528 4.376C144.547 3.224 143.245 2.648 141.624 2.648C139.789 2.648 138.339 3.24533 137.272 4.44C136.248 5.592 135.736 7.064 135.736 8.856ZM131.704 36.312C131.704 37.6773 131.939 39.0853 132.408 40.536C132.877 41.9867 133.709 43.2027 134.904 44.184C136.099 45.1653 137.763 45.656 139.896 45.656C141.816 45.656 143.565 45.208 145.144 44.312C146.723 43.3733 148.131 42.2853 149.368 41.048C148.173 39.64 146.851 37.9547 145.4 35.992C143.651 33.6453 142.093 31.5547 140.728 29.72C139.363 27.8427 138.147 26.1787 137.08 24.728C135.501 26.264 134.2 27.9707 133.176 29.848C132.195 31.6827 131.704 33.8373 131.704 36.312Z"
                  fill="#8BD8CD"
                />
              </svg>
            </Link>
          </div>

          {/*Sable Styling*/}
          <div className="flex justify-center text-indigo-500">
            <Link href="https://www.instagram.com/sable_styling/">
              <svg
                className="w-auto h-6 sm:h-8 lg:h-8"
                width="336"
                height="50"
                viewBox="0 0 336 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1918 0.17632C6.59011 1.05317 2.78581 3.71752 1.01848 7.93323C0.329416 9.58576 0.239602 10.1929 0.239602 13.6666C0.239602 17.073 0.329417 17.7137 0.928572 18.9953C2.84569 23.0762 5.75135 24.7962 14.6182 27.1232C23.6647 29.5177 25.6718 30.4958 26.6303 33.1264C27.2294 34.6778 27.1395 37.848 26.4806 39.5006C25.7017 41.423 23.6947 43.2442 21.3581 44.0535C18.5424 45.099 12.761 45.0654 9.88526 44.0535C6.56017 42.8395 4.2836 39.8716 4.2836 36.6676C4.2836 35.9594 4.16375 35.9256 2.15672 35.9256H0L0.149691 38.0841C0.449268 42.2323 2.78581 45.7399 6.53023 47.696C9.37602 49.2136 11.2033 49.5846 15.8164 49.5509C20.5494 49.5509 22.7362 49.045 25.6418 47.2912C29.8955 44.7618 32.1122 39.4331 31.2435 33.8684C30.8241 31.3052 29.9254 29.4166 28.2779 27.7302C25.9713 25.3695 24.2639 24.6612 15.8164 22.469C9.64556 20.8502 7.75838 20.1083 6.14084 18.5231C3.53466 16.0274 3.62457 11.1034 6.29063 8.10188C8.44735 5.67356 10.1848 5.10022 15.5169 5.06654C19.1115 5.06654 20.3097 5.20139 21.5679 5.67356C24.6832 6.92141 27.0497 9.88927 27.0497 12.5874V13.6666H29.2963C30.5245 13.6666 31.543 13.5318 31.543 13.3968C31.543 12.1826 30.7642 8.84377 30.165 7.52855C28.6973 4.22337 25.522 1.72768 21.5978 0.682174C19.1715 0.0413512 14.5283 -0.194677 12.1918 0.17632Z"
                  fill="black"
                />
                <path
                  d="M59.7404 0.413603C59.1801 0.71712 56.585 6.51808 48.5934 25.0675C42.8724 38.3895 38.1836 49.3843 38.1836 49.4518C38.1836 49.5191 39.2453 49.5529 40.5723 49.4855L42.9315 49.3843L45.6445 42.8751L48.3575 36.3996H60.5956H72.8336L75.724 42.9763L78.5841 49.5529H80.7959C82.0052 49.5529 83.0078 49.418 83.0078 49.2493C83.0078 49.047 78.3187 38.0859 72.5683 24.8315C65.7268 8.98002 61.9522 0.582262 61.5393 0.346118C60.7725 -0.126057 60.6251 -0.126057 59.7404 0.413603ZM65.6973 19.7388C68.4103 25.9782 70.5925 31.1383 70.5336 31.2057C70.4745 31.2732 65.9627 31.3069 60.5366 31.2732L50.6282 31.172L55.5234 19.7726C58.2069 13.5331 60.4777 8.40667 60.5661 8.40667C60.6546 8.40667 62.9843 13.4994 65.6973 19.7388Z"
                  fill="black"
                />
                <path
                  d="M93.5661 2.4696C92.9687 3.1281 92.9688 3.42452 92.9688 25.5174V47.9395L93.716 48.7298L94.4324 49.5529H104.265C114.695 49.5529 116.399 49.3883 118.88 48.0383C123.422 45.6018 126.171 40.8277 126.171 35.2304C126.201 30.8184 124.916 27.7563 121.778 24.5955L119.865 22.6529L120.643 21.8626C121.061 21.4347 121.808 20.1177 122.346 18.9652C123.213 16.9897 123.303 16.5287 123.303 13.6642C123.303 10.9643 123.184 10.2729 122.496 8.65963C121.48 6.25606 119.418 3.98425 117.236 2.86479L115.532 1.97575L104.863 1.87698C94.4622 1.77821 94.1635 1.8111 93.5661 2.4696ZM115.233 7.04621C120.373 9.64733 120.583 17.319 115.592 20.0847C114.068 20.9078 114.068 20.9078 105.61 20.9078H97.1523V13.6642V6.42071H105.61C113.141 6.42071 114.158 6.48648 115.233 7.04621ZM116.609 26.3735C118.491 27.3612 120.075 28.9746 121.001 30.9172C121.659 32.333 121.808 33.0243 121.808 35.2304C121.808 37.4364 121.659 38.1278 121.001 39.5436C120.553 40.4984 119.627 41.7825 118.939 42.4081C116.757 44.4824 116.04 44.6141 106.058 44.6141H97.1523V35.0328V25.4515L106.208 25.5832C114.636 25.682 115.323 25.715 116.609 26.3735Z"
                  fill="black"
                />
                <path
                  d="M136.133 24.8714V47.9403L136.911 48.7302L137.658 49.5529H151.199H164.708L165.361 47.2822C165.736 46.0317 166.016 44.9128 166.016 44.8141C166.016 44.7154 160.351 44.6166 153.408 44.6166H140.802V23.226V1.8353H138.468H136.133V24.8714Z"
                  fill="black"
                />
                <path
                  d="M175.011 2.52644C174.458 3.18461 174.428 4.10607 174.335 25.1346C174.274 40.4043 174.367 47.348 174.581 47.9403C174.765 48.4341 175.288 48.9605 175.688 49.1909C176.21 49.4542 180.449 49.5529 189.482 49.5529H202.539V47.0847V44.6166H190.711H178.883V35.0731V25.5296H187.946H196.978L197.501 23.6208C197.777 22.6007 198.084 21.5476 198.146 21.3172C198.269 21.0211 196.241 20.9223 188.591 20.9223H178.883V13.6824V6.44257H190.711H202.539V4.13893V1.8353H189.083C175.779 1.8353 175.595 1.8353 175.011 2.52644Z"
                  fill="black"
                />
                <path
                  d="M216.938 26.1449C215.538 26.8063 213.739 29.3972 213.739 30.7201C213.739 31.2714 214.089 32.484 214.489 33.366C215.238 34.9095 216.088 35.3505 220.738 36.6734C223.489 37.5004 224.239 38.1068 224.239 39.7053C224.239 41.5795 222.688 42.737 220.188 42.737C217.989 42.737 215.739 41.3039 215.739 39.981C215.739 39.6501 215.287 39.4297 214.738 39.4297C213.587 39.4297 213.488 39.9257 214.338 41.9102C215.138 43.8395 217.188 44.942 219.989 44.942C224.588 44.942 227.538 41.7999 226.288 38.2721C225.589 36.2326 224.588 35.5159 220.387 34.2481C217.388 33.311 216.488 32.8149 216.189 31.8226C215.538 29.8933 217.588 27.8537 220.089 27.8537C222.189 27.8537 224.239 29.1215 224.239 30.3894C224.239 30.8304 224.739 31.1611 225.539 31.1611C226.638 31.1611 226.738 30.9957 226.489 29.8933C225.788 27.3024 223.988 26.0346 220.889 25.8142C219.288 25.7589 217.489 25.8692 216.938 26.1449Z"
                  fill="black"
                />
                <path
                  d="M232.238 26.7512C232.238 27.7434 232.588 27.8537 234.988 27.8537H237.738V36.3979C237.738 44.5562 237.787 44.942 238.739 44.942C239.688 44.942 239.738 44.5562 239.738 36.3979V27.8537H242.238C244.388 27.8537 244.739 27.6883 244.739 26.7512C244.739 25.7038 244.388 25.6488 238.488 25.6488C232.588 25.6488 232.238 25.7038 232.238 26.7512Z"
                  fill="black"
                />
                <path
                  d="M250.738 26.0898C250.738 26.3653 252.088 28.6805 253.738 31.2714C256.688 35.9569 256.688 36.012 256.838 40.3117C256.989 44.2254 257.088 44.6665 257.988 44.6665C258.888 44.6665 258.988 44.2254 259.139 40.3667C259.288 36.1223 259.288 36.067 262.238 31.3815C263.889 28.8459 265.238 26.4756 265.238 26.1999C265.238 25.8692 264.838 25.6488 264.289 25.6488C263.688 25.6488 262.438 27.137 260.789 29.783C259.338 32.0431 258.088 33.9173 258.038 33.9173C257.938 33.9173 256.688 32.0431 255.289 29.783C253.539 27.0269 252.339 25.6488 251.688 25.6488C251.188 25.6488 250.738 25.8692 250.738 26.0898Z"
                  fill="black"
                />
                <path
                  d="M272.838 35.1299L272.988 44.6665L278.189 44.8318C283.238 44.9972 284.189 44.7215 284.239 43.123C284.239 42.9024 282.089 42.737 279.489 42.737H274.738V34.1928C274.738 25.9795 274.688 25.6488 273.738 25.6488C272.739 25.6488 272.739 25.9243 272.838 35.1299Z"
                  fill="black"
                />
                <path
                  d="M290.238 35.2955C290.238 44.5562 290.288 44.942 291.238 44.942C292.187 44.942 292.239 44.5562 292.239 35.2955C292.239 26.0346 292.187 25.6488 291.238 25.6488C290.288 25.6488 290.238 26.0346 290.238 35.2955Z"
                  fill="black"
                />
                <path
                  d="M301.088 25.9795C300.888 26.1999 300.739 30.5547 300.739 35.6812C300.739 44.5562 300.789 44.942 301.738 44.942C302.638 44.942 302.738 44.5011 302.839 37.7759L302.988 30.665L307.487 37.7759C310.288 42.1859 312.289 44.8869 312.739 44.7766C313.388 44.6665 313.489 43.0677 313.638 35.1299C313.738 25.9795 313.738 25.6488 312.788 25.6488C311.839 25.6488 311.737 26.0896 311.638 32.8699L311.488 40.036L306.988 33.0353C302.588 26.1999 301.788 25.2078 301.088 25.9795Z"
                  fill="black"
                />
                <path
                  d="M324.989 26.4205C321.738 28.0191 319.939 32.0431 320.339 36.7837C320.789 41.6898 323.588 44.5011 328.389 44.8318C330.939 44.9972 331.988 44.8318 333.638 43.8947L335.738 42.737V38.6028C335.738 34.8544 335.639 34.4685 334.739 34.4685C333.838 34.4685 333.738 34.8544 333.738 37.9412C333.738 41.1935 333.638 41.5243 332.488 42.0756C330.688 43.0127 327.438 42.9024 325.489 41.8552C321.838 39.981 321.139 33.2006 324.238 29.783C325.638 28.2947 326.038 28.1294 328.889 28.2395C330.589 28.2947 332.538 28.4048 333.188 28.5151C335.088 28.7908 335.038 27.3576 333.039 26.4756C330.838 25.4834 326.988 25.4282 324.989 26.4205Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>

          {/*Delicate Days*/}
          <div className="flex justify-center text-indigo-500">
            <Link href="https://www.delicatedays.com.au/">
              <svg
                className="w-auto h-6 sm:h-8 lg:h-9"
                width="221"
                height="37"
                viewBox="0 0 221 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4299 0.41059C13.8927 0.589658 13.654 2.26095 13.654 5.72292V10.7965L11.8634 9.84147C10.9085 9.36396 8.99858 8.94613 7.62584 8.94613C5.53688 8.94613 4.76098 9.30427 2.91077 11.2143C1.12023 13.005 0.583075 14.0197 0.224968 16.5863C-0.43156 21.6002 0.344337 25.48 2.61234 27.9273C4.28351 29.7776 4.88035 30.0761 7.56615 30.0761C9.77447 30.1358 11.0278 29.7776 12.3409 28.8226C14.0718 27.5691 14.1314 27.5094 14.4299 28.6435C14.6686 29.5389 15.2654 29.8373 16.8769 29.8373H19.0256V15.2732C19.0256 2.5594 18.9062 0.649347 18.0706 0.350901C16.9963 -0.0669225 15.5042 -0.0669225 14.4299 0.41059ZM11.8037 14.6763C13.4749 16.0491 13.654 16.5267 13.654 19.6902C13.654 22.7343 13.4749 23.3312 12.1022 24.4056C8.46142 27.2707 5.65625 25.1816 5.59657 19.5708C5.59657 16.4073 5.77562 15.8701 7.26773 14.5569C9.35668 12.7662 9.53574 12.7662 11.8037 14.6763Z"
                  fill="black"
                />
                <path
                  d="M46.5998 0.709068C45.7642 1.54471 45.5852 27.8079 46.4208 29.1211C46.7192 29.5986 47.7935 29.8373 49.2259 29.718L51.5536 29.5389L51.7327 15.2732C51.852 4.23072 51.673 0.888135 51.1358 0.470312C50.0018 -0.245957 47.4354 -0.126579 46.5998 0.709068Z"
                  fill="black"
                />
                <path
                  d="M57.9998 1.18654C56.9851 1.60436 56.627 2.26094 56.627 3.45473C56.627 5.72291 57.8207 6.67794 60.3274 6.43918C62.118 6.26011 62.297 6.08105 62.4761 3.99193C62.6551 2.08188 62.4761 1.72374 61.1033 1.18654C60.2678 0.828404 59.4919 0.589647 59.4322 0.649336C59.3725 0.649336 58.716 0.888093 57.9998 1.18654Z"
                  fill="black"
                />
                <path
                  d="M156.3 5.96171C156.3 8.88647 156.181 11.3337 156.002 11.3337C155.882 11.3337 154.868 10.7965 153.793 10.1399C150.093 7.93145 145.796 9.18492 143.826 13.0647C141.319 17.9592 142.632 27.3901 146.094 29.2404C148.243 30.3745 152.301 29.9567 154.689 28.3451L156.897 26.7932V28.3451C156.897 29.7776 157.076 29.897 158.867 29.718L160.777 29.5389L160.956 15.0344L161.075 0.58969H158.688H156.3V5.96171ZM154.45 14.8554C156.002 16.2879 156.3 17.0639 156.3 19.2724C156.3 22.9731 154.092 25.6591 151.167 25.6591C149.317 25.6591 148.959 25.4203 148.123 23.4506C146.393 19.2127 148.183 13.1244 151.167 13.1244C151.943 13.1244 153.435 13.9004 154.45 14.8554Z"
                  fill="black"
                />
                <path
                  d="M107.717 5.12605C107.538 5.66325 107.359 6.67796 107.359 7.45392C107.359 8.40895 106.941 8.94615 105.807 9.1849C104.554 9.54304 104.315 9.84148 104.494 11.5128C104.613 12.9453 104.971 13.4825 105.926 13.6019C107.12 13.781 107.239 14.2585 107.478 20.2274C107.657 23.749 108.135 27.211 108.493 27.9273C109.925 30.6133 117.087 30.9714 117.744 28.3451C118.281 26.1366 117.684 25.1816 115.894 25.5397C113.446 26.0172 112.73 24.4056 112.73 18.6755V13.7213H115.058C116.908 13.7213 117.505 13.4228 117.803 12.5275C118.46 10.5578 117.087 8.94615 114.819 8.94615C112.79 8.94615 112.73 8.88646 112.73 6.55859C112.73 4.17102 112.73 4.17102 110.403 4.17102C108.851 4.17102 107.956 4.46947 107.717 5.12605Z"
                  fill="black"
                />
                <path
                  d="M28.8138 9.54301C26.5458 10.4383 23.9196 14.1391 23.4422 17.0042C22.6663 22.5552 23.86 26.1366 27.6201 28.8823C28.9331 29.897 30.0671 30.1358 33.8273 30.0761C39.3779 30.0164 41.1088 29.3001 41.1088 26.8529C41.1088 24.8234 41.1684 24.8234 36.8712 25.6591C32.6336 26.4947 30.0671 25.6591 29.2316 23.1521C28.8734 22.1374 28.575 21.2421 28.575 21.1227C28.575 21.0033 31.4399 20.8243 35.0209 20.7646L41.4072 20.5855L41.5862 17.7801C41.9443 12.4081 38.5423 8.94612 33.0514 9.00581C31.4399 9.00581 29.53 9.24456 28.8138 9.54301ZM35.8565 13.9003C36.0953 14.3181 36.334 15.2135 36.334 15.9297C36.334 17.2429 36.0953 17.3026 32.5142 17.3026H28.6347L29.2912 15.4522C29.6493 14.4375 30.4849 13.3631 31.2011 13.1244C32.6932 12.4678 35.2597 12.9453 35.8565 13.9003Z"
                  fill="black"
                />
                <path
                  d="M57.9996 9.36396C57.4027 9.54303 57.2237 12.229 57.2237 19.7499V29.897L59.7901 29.7179L62.2969 29.5389L62.4759 19.7499C62.5953 12.2887 62.4162 9.84147 61.8791 9.42365C61.0435 8.94613 59.1336 8.88645 57.9996 9.36396Z"
                  fill="black"
                />
                <path
                  d="M71.1303 10.0802C68.0864 11.9903 67.1911 13.9003 66.9523 18.9739C66.6539 24.1669 67.6089 26.7335 70.5334 28.8823C72.4433 30.2551 78.0537 30.5536 80.262 29.3598C82.3509 28.2854 82.6494 23.3312 80.6201 24.1669C77.2181 25.5994 76.3825 25.7785 75.0097 25.48C73.0998 25.0025 72.1449 22.794 72.1449 19.0336C72.1449 16.646 72.4433 15.7507 73.637 14.6166C75.2485 12.9453 77.3374 12.7066 79.0683 14.0197C80.9185 15.3926 81.6944 15.0941 81.6944 12.8856C81.6944 10.1996 80.5007 9.36397 76.4422 9.12521C73.8161 8.94614 72.6224 9.12521 71.1303 10.0802Z"
                  fill="black"
                />
                <path
                  d="M88.558 9.60273C85.8722 10.3787 84.6785 12.4081 85.7528 14.1988C86.1706 14.7957 86.7078 14.736 88.4386 14.0197C89.6323 13.5422 91.7213 13.1244 93.0343 13.1244C95.0636 13.1244 95.5411 13.3631 96.0186 14.6763C96.9138 17.0042 96.8541 17.1235 93.0343 17.4817C86.7675 18.1383 84.6785 19.9289 84.6785 24.4653C84.6785 29.1807 89.9904 31.7474 94.8249 29.3598C96.7348 28.4048 97.2122 28.3451 97.2122 29.0614C97.2122 29.6583 97.8091 29.8373 99.4803 29.7179L101.689 29.5389L101.868 22.0777C102.047 13.8407 101.271 11.1546 98.4059 9.7221C96.7348 8.88646 91.2438 8.76708 88.558 9.60273ZM96.6154 22.6149C96.6154 24.7041 94.3474 26.435 91.96 26.1366C90.647 26.0172 90.2889 25.5994 90.1695 23.9878C89.9308 21.839 91.1841 21.0033 94.7055 20.9437C96.4363 20.884 96.6154 21.063 96.6154 22.6149Z"
                  fill="black"
                />
                <path
                  d="M124.667 10.2593C121.742 12.1694 120.25 15.5119 120.25 20.0483C120.25 24.1072 121.504 26.7932 124.249 28.8823C125.622 29.897 126.756 30.1358 130.516 30.0761C136.067 30.0164 137.798 29.3001 137.798 26.8529C137.798 24.8234 137.857 24.8831 133.739 25.6591C130.516 26.256 127.174 25.6591 126.338 24.3459C126.099 23.9281 125.861 22.9731 125.861 22.1971C125.861 20.9436 126.04 20.884 132.128 20.884C139.29 20.884 139.409 20.8243 138.693 16.3476C138.454 14.4375 137.678 12.9453 136.365 11.4531C134.515 9.48334 134.037 9.30428 130.576 9.06552C127.293 8.88645 126.457 9.06552 124.667 10.2593ZM132.128 14.0197C134.694 16.5267 134.157 17.3026 129.74 17.3026C126.398 17.3026 125.861 17.1832 125.861 16.2282C125.861 14.3182 127.651 12.7066 129.919 12.5872C130.337 12.5275 131.352 13.1841 132.128 14.0197Z"
                  fill="black"
                />
                <path
                  d="M169.55 9.7818C167.223 10.5578 166.208 12.05 166.745 13.7213C167.103 14.7957 167.163 14.7957 169.61 13.7213C174.086 11.6322 176.951 12.4678 177.309 15.8104L177.488 17.6011L173.609 17.9592C167.521 18.4964 165.85 19.8693 165.85 24.4653C165.85 28.0467 167.82 29.8373 171.878 29.8373C173.967 29.8373 175.459 29.4792 176.653 28.5839L178.384 27.3901V28.6435C178.384 29.7179 178.682 29.897 180.353 29.7179L182.263 29.5389L182.442 22.2568C182.621 13.4825 181.965 11.1546 178.742 9.84149C176.235 8.76708 172.296 8.76708 169.55 9.7818ZM177.608 21.839C178.563 24.3459 174.803 27.2707 171.938 26.1963C170.446 25.6591 170.088 22.8537 171.341 21.6002C172.415 20.5258 177.13 20.7049 177.608 21.839Z"
                  fill="black"
                />
                <path
                  d="M210.195 9.84148C207.867 10.8562 207.031 12.3484 207.031 15.4523C207.031 18.3173 207.926 19.332 212.224 21.1824C215.685 22.7343 216.581 23.9281 215.327 25.4203C214.551 26.3754 211.09 26.3754 207.807 25.3606C206.613 25.0025 206.434 25.1219 206.434 26.435C206.434 28.7629 208.464 29.8373 212.761 29.8373C215.865 29.8373 216.76 29.5986 218.252 28.3451C220.281 26.6738 220.997 24.1072 220.102 21.6002C219.565 19.9289 218.491 19.2127 213.059 16.7057C211.448 15.9895 210.911 14.4972 211.806 13.4228C212.642 12.4081 216.044 12.4081 218.55 13.4228C219.386 13.781 219.565 13.5422 219.565 12.05C219.565 10.5577 219.207 10.1399 217.715 9.60272C215.208 8.70739 212.522 8.82676 210.195 9.84148Z"
                  fill="black"
                />
                <path
                  d="M184.948 10.0802C184.948 10.3787 185.903 12.9453 187.097 15.8701C188.231 18.7351 189.723 22.7343 190.38 24.7041C191.096 26.7335 191.872 28.6435 192.23 29.0614C192.588 29.5389 192.409 30.673 191.573 32.583C189.783 36.6419 189.902 37 192.946 37H195.572L197.363 31.4489C198.377 28.4645 200.407 22.4359 201.839 18.1979C203.331 13.9003 204.406 10.2593 204.226 9.96085C204.107 9.72209 202.913 9.54303 201.66 9.54303C199.392 9.54303 199.332 9.60272 198.736 12.3484C197.721 17.0042 195.334 23.57 194.916 22.8537C194.558 22.3165 191.335 13.3034 190.499 10.5577C190.26 9.78178 189.544 9.54303 187.575 9.54303C186.142 9.54303 184.948 9.78178 184.948 10.0802Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>

          {/*Peter Sadler */}
          <div className="flex justify-center text-indigo-500">
            <Link href="https://www.petersadlerremovals.com.au/">
              <svg
                className="w-auto h-6 sm:h-6 lg:h-8"
                width="327"
                height="48"
                viewBox="0 0 327 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_171_2)">
                  <path
                    d="M43.2398 2.56214C47.0798 5.24437 48.2798 9.80817 48.2798 15.0125C48.2798 23.3795 45.1998 30.025 33.1198 30.025H12.0398V47.1593C12.0398 47.1593 12.0398 48 11.1998 48H0.83982C-0.04018 48 -0.000179985 47.1593 -0.000179985 47.1593V18.8157C-0.000179985 18.8157 -0.000179958 17.975 0.83982 17.975H33.1198C35.3198 17.975 36.2798 16.6939 36.2798 15.0125C36.2798 13.3311 35.3598 12.05 33.1198 12.05H0.83982C-0.000179958 12.05 -0.000179985 11.2093 -0.000179985 11.2093V0.840701C-0.000179985 0.840701 -0.000179958 0 0.83982 0H33.1198H43.1998L43.2398 2.56214Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M70.28 0H39.4C27.32 0 24.24 6.64554 24.24 15.0125C24.24 16.0133 24.28 17.0142 24.4 17.975H33.12C35.32 17.975 36.28 16.6939 36.28 15.0125C36.28 13.3311 37.2 12.05 39.44 12.05H70.28C71.12 12.05 71.12 11.2093 71.12 11.2093V0.840701C71.12 0.840701 71.12 0 70.28 0Z"
                    fill="#FFD200"
                  />
                  <path
                    d="M57.4 17.975H48.16C47.44 24.8607 43.76 30.025 33.16 30.025H57.4C59.6 30.025 60.56 31.3061 60.56 32.9875C60.56 34.6689 59.64 35.95 57.4 35.95H25.08C24.24 35.95 24.24 36.7907 24.24 36.7907V47.1593C24.24 47.1593 24.24 48 25.08 48H57.36C69.44 48 72.52 41.3545 72.52 32.9875C72.56 24.6205 69.48 17.975 57.4 17.975Z"
                    fill="#FFD200"
                  />
                  <path
                    d="M90.96 14.5321H86.6V23.0592H82.16V0.360302H90.96C95.64 0.360302 98.44 3.56297 98.44 7.44621C98.44 11.2894 95.64 14.5321 90.96 14.5321ZM90.72 4.3236H86.6V10.5288H90.72C92.72 10.5288 94 9.28774 94 7.44621C94 5.60467 92.72 4.3236 90.72 4.3236Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M103.64 23.0592V0.360302H118.56V4.3236H108.04V9.64804H117V13.6113H108.04V19.1359H118.56V23.0993H103.64V23.0592Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M134.28 4.3236V23.0592H129.84V4.3236H123.92V0.360302H140.2V4.3236H134.28Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M146.16 23.0592V0.360302H161.08V4.3236H150.56V9.64804H159.52V13.6113H150.56V19.1359H161.08V23.0993H146.16V23.0592Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M180 23.0592L175.56 14.0117H172.36V23.0592H167.92V0.360302H176.8C181.4 0.360302 184.16 3.52294 184.16 7.28607C184.16 10.4887 182.2 12.4504 180.04 13.251L185.12 23.0192H180V23.0592ZM176.56 4.3236H172.4V10.3286H176.56C178.52 10.3286 179.76 9.08757 179.76 7.32611C179.76 5.56464 178.52 4.3236 176.56 4.3236Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M207.48 23.2594C204.04 23.2594 201.44 22.5388 199.2 20.2569L202.08 17.3745C203.52 18.8157 205.44 19.2961 207.56 19.2961C210.16 19.2961 211.56 18.2952 211.56 16.4937C211.56 15.6931 211.32 15.0125 210.84 14.5721C210.4 14.1718 209.88 13.9316 208.84 13.7715L206.12 13.3711C204.16 13.0909 202.76 12.4904 201.72 11.4896C200.64 10.4087 200.08 8.92744 200.08 7.04587C200.08 3.0025 203.08 0.160133 207.96 0.160133C211.08 0.160133 213.32 0.920767 215.28 2.80233L212.48 5.56464C211.04 4.2035 209.32 4.00334 207.84 4.00334C205.48 4.00334 204.32 5.32444 204.32 6.88574C204.32 7.44621 204.52 8.0467 205 8.52711C205.44 8.92744 206.16 9.28774 207.12 9.40784L209.8 9.80817C211.88 10.0884 213.16 10.6489 214.12 11.5696C215.32 12.7306 215.88 14.372 215.88 16.3736C215.92 20.7773 212.24 23.2594 207.48 23.2594Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M235.04 23.0592L233.72 19.0559H225.68L224.32 23.0592H219.72L227.96 0.360302H231.44L239.72 23.0592H235.04ZM229.76 7.08591L226.88 15.3328H232.52L229.76 7.08591Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M259.08 20.8974C257.6 22.3786 255.44 23.0592 253.08 23.0592H244.88V0.360302H253.08C255.44 0.360302 257.56 1.04087 259.08 2.5221C261.64 5.08424 261.36 8.20684 261.36 11.6097C261.36 15.0525 261.6 18.3353 259.08 20.8974ZM255.96 5.72477C255.2 4.804 254.16 4.3236 252.64 4.3236H249.28V19.0959H252.64C254.16 19.0959 255.2 18.6155 255.96 17.6947C256.8 16.6939 256.92 15.0525 256.92 11.6097C256.92 8.16681 256.8 6.76564 255.96 5.72477Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M268.4 23.0592V0.360302H272.84V19.0959H283.12V23.0592H268.4V23.0592Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M288.04 23.0592V0.360302H302.96V4.3236H292.44V9.64804H301.4V13.6113H292.44V19.1359H302.96V23.0993H288.04V23.0592Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M321.84 23.0592L317.44 14.0117H314.24V23.0592H309.8V0.360302H318.68C323.28 0.360302 326.04 3.52294 326.04 7.28607C326.04 10.4887 324.08 12.4504 321.92 13.251L327 23.0192H321.84V23.0592ZM318.44 4.3236H314.28V10.3286H318.44C320.4 10.3286 321.64 9.08757 321.64 7.32611C321.64 5.56464 320.36 4.3236 318.44 4.3236Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M88.64 47.1593L86.24 42.2752H84.52V47.1593H82.12V34.9491H86.92C89.4 34.9491 90.88 36.6305 90.88 38.6722C90.88 40.3937 89.84 41.4345 88.64 41.8749L91.36 47.1593H88.64ZM86.8 37.0709H84.56V40.3136H86.8C87.84 40.3136 88.52 39.633 88.52 38.7123C88.52 37.7114 87.84 37.0709 86.8 37.0709Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M96.4 47.1593V34.9491H104.44V37.0709H98.8V39.9533H103.6V42.0751H98.8V45.0375H104.44V47.1593H96.4Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M118.56 47.1593V40.0334L116.24 44.6772H114.64L112.28 40.0334V47.1593H109.88V34.9491H112.24L115.44 41.5546L118.6 34.9491H120.96V47.1593H118.56Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M134.24 45.9183C133.4 46.759 132.32 47.2394 130.96 47.2394C129.56 47.2394 128.52 46.759 127.64 45.9183C126.4 44.6772 126.44 43.156 126.44 41.0342C126.44 38.9124 126.4 37.3912 127.64 36.1501C128.48 35.3094 129.56 34.829 130.96 34.829C132.36 34.829 133.4 35.3094 134.24 36.1501C135.48 37.3912 135.44 38.9124 135.44 41.0342C135.44 43.156 135.48 44.6772 134.24 45.9183ZM132.48 37.5913C132.12 37.191 131.6 36.9508 130.96 36.9508C130.32 36.9508 129.76 37.191 129.4 37.5913C128.92 38.1118 128.8 38.6722 128.8 41.0342C128.8 43.3962 128.92 43.9566 129.4 44.4771C129.76 44.8774 130.28 45.1176 130.96 45.1176C131.6 45.1176 132.16 44.8774 132.48 44.4771C132.96 43.9566 133.08 43.3962 133.08 41.0342C133.08 38.6722 132.92 38.1118 132.48 37.5913Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M145.36 47.1593H143.6L139.56 34.9491H142.04L144.48 42.9158L146.92 34.9491H149.4L145.36 47.1593Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M160.64 47.1593L159.92 44.9975H155.6L154.88 47.1593H152.4L156.8 34.9491H158.68L163.12 47.1593H160.64ZM157.76 38.5521L156.2 42.9958H159.24L157.76 38.5521Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M167.68 47.1593V34.9491H170.08V45.0375H175.6V47.1593H167.68Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M183.84 47.2394C182 47.2394 180.6 46.839 179.4 45.638L180.96 44.0767C181.72 44.8374 182.76 45.1176 183.92 45.1176C185.32 45.1176 186.08 44.5972 186.08 43.5963C186.08 43.156 185.96 42.7957 185.72 42.5555C185.48 42.3153 185.2 42.1952 184.64 42.1151L183.16 41.9149C182.12 41.7548 181.36 41.4345 180.8 40.9141C180.2 40.3136 179.92 39.553 179.92 38.5121C179.92 36.3503 181.52 34.789 184.16 34.789C185.84 34.789 187.04 35.1893 188.12 36.2302L186.6 37.7114C185.84 36.9908 184.92 36.8707 184.08 36.8707C182.8 36.8707 182.2 37.5913 182.2 38.432C182.2 38.7523 182.32 39.0726 182.56 39.3128C182.8 39.553 183.2 39.7131 183.68 39.7932L185.12 39.9933C186.24 40.1535 186.92 40.4737 187.44 40.9541C188.08 41.5546 188.4 42.4754 188.4 43.5563C188.36 45.9183 186.36 47.2394 183.84 47.2394Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M208.36 47.1593L207.48 46.0784C206.92 46.5188 206.08 47.2394 204.32 47.2394C201.64 47.2394 200.28 45.8382 200.28 43.5163C200.28 41.955 201.4 40.9541 202.48 40.2335C202 39.6731 201.28 38.7923 201.28 37.6314C201.28 35.95 202.48 34.789 204.52 34.789C206.44 34.789 207.64 35.99 207.64 37.6714C207.64 38.6322 207.16 39.2327 206.4 39.7932C206.4 39.7932 205.84 40.2335 205.52 40.4337L207.56 42.8757C207.96 42.3553 208.16 41.5947 208.16 40.7139H210.28C210.2 42.2752 209.84 43.5563 208.96 44.5171L211.16 47.1193H208.36V47.1593ZM203.68 41.6347C202.96 42.1551 202.44 42.6355 202.44 43.5163C202.44 44.5171 203.28 45.2377 204.28 45.2377C205 45.2377 205.52 44.9975 206.08 44.5171L203.68 41.6347ZM204.52 36.7506C203.84 36.7506 203.52 37.191 203.52 37.7515C203.52 38.1918 203.88 38.6322 204.32 39.1126C204.48 38.9925 204.84 38.7523 204.84 38.7523C205.24 38.4721 205.56 38.1518 205.56 37.7114C205.52 37.151 205.16 36.7506 204.52 36.7506Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M223.12 47.1593V34.9491H225.52V45.0375H231.04V47.1593H223.12Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M242.12 45.9183C241.28 46.759 240.2 47.2394 238.84 47.2394C237.44 47.2394 236.4 46.759 235.52 45.9183C234.28 44.6772 234.32 43.156 234.32 41.0342C234.32 38.9124 234.28 37.3912 235.52 36.1501C236.36 35.3094 237.44 34.829 238.84 34.829C240.24 34.829 241.28 35.3094 242.12 36.1501C243.36 37.3912 243.32 38.9124 243.32 41.0342C243.32 43.156 243.36 44.6772 242.12 45.9183ZM240.36 37.5913C240 37.191 239.48 36.9508 238.84 36.9508C238.2 36.9508 237.64 37.191 237.28 37.5913C236.8 38.1118 236.68 38.6722 236.68 41.0342C236.68 43.3962 236.8 43.9566 237.28 44.4771C237.64 44.8774 238.16 45.1176 238.84 45.1176C239.48 45.1176 240.04 44.8774 240.36 44.4771C240.84 43.9566 240.96 43.3962 240.96 41.0342C240.96 38.6722 240.8 38.1118 240.36 37.5913Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M256.44 45.8782C255.48 46.8791 254.28 47.2794 253 47.2794C251.68 47.2794 250.56 46.799 249.72 45.9583C248.48 44.7173 248.52 43.196 248.52 41.0742C248.52 38.9525 248.48 37.4312 249.72 36.1902C250.56 35.3495 251.64 34.8691 253 34.8691C255.84 34.8691 257.28 36.7106 257.6 38.7923H255.2C254.92 37.6314 254.24 36.9908 253 36.9908C252.36 36.9908 251.8 37.231 251.48 37.6314C251 38.1518 250.88 38.7123 250.88 41.0742C250.88 43.4362 251 43.9967 251.48 44.5171C251.84 44.9174 252.36 45.1576 253 45.1576C253.72 45.1576 254.32 44.9174 254.68 44.4771C255.08 44.0367 255.24 43.4762 255.24 42.8357V42.3553H253V40.3536H257.6V42.1551C257.6 43.9166 257.28 44.9575 256.44 45.8782Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M263.08 47.1593V34.9491H265.48V47.1593H263.08Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M274.72 47.2394C272.88 47.2394 271.48 46.839 270.28 45.638L271.84 44.0767C272.6 44.8374 273.64 45.1176 274.8 45.1176C276.2 45.1176 276.96 44.5972 276.96 43.5963C276.96 43.156 276.84 42.7957 276.6 42.5555C276.36 42.3153 276.08 42.1952 275.52 42.1151L274.04 41.9149C273 41.7548 272.24 41.4345 271.68 40.9141C271.08 40.3136 270.8 39.553 270.8 38.5121C270.8 36.3503 272.4 34.789 275.04 34.789C276.72 34.789 277.92 35.1893 279 36.2302L277.48 37.7114C276.72 36.9908 275.8 36.8707 274.96 36.8707C273.68 36.8707 273.08 37.5913 273.08 38.432C273.08 38.7523 273.2 39.0726 273.44 39.3128C273.68 39.553 274.08 39.7131 274.56 39.7932L276 39.9933C277.12 40.1535 277.8 40.4737 278.32 40.9541C278.96 41.5546 279.28 42.4754 279.28 43.5563C279.24 45.9183 277.28 47.2394 274.72 47.2394Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M289.08 37.0709V47.1593H286.68V37.0709H283.48V34.9491H292.24V37.0709H289.08Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M297.12 47.1593V34.9491H299.52V47.1593H297.12Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M309.48 47.2394C308.16 47.2394 307.04 46.759 306.2 45.9183C304.96 44.6772 305 43.156 305 41.0342C305 38.9124 304.96 37.3912 306.2 36.1501C307.04 35.3094 308.16 34.829 309.48 34.829C311.76 34.829 313.56 36.1501 313.96 38.6722H311.56C311.32 37.7114 310.72 36.9508 309.52 36.9508C308.88 36.9508 308.32 37.191 308 37.5913C307.52 38.1118 307.4 38.6722 307.4 41.0342C307.4 43.3962 307.52 43.9566 308 44.4771C308.36 44.8774 308.88 45.1176 309.52 45.1176C310.72 45.1176 311.32 44.357 311.56 43.3962H313.96C313.52 45.9583 311.72 47.2394 309.48 47.2394Z"
                    fill="#002F9F"
                  />
                  <path
                    d="M322.44 47.2394C320.6 47.2394 319.2 46.839 318 45.638L319.56 44.0767C320.32 44.8374 321.36 45.1176 322.52 45.1176C323.92 45.1176 324.68 44.5972 324.68 43.5963C324.68 43.156 324.56 42.7957 324.32 42.5555C324.08 42.3153 323.8 42.1952 323.24 42.1151L321.76 41.9149C320.72 41.7548 319.96 41.4345 319.4 40.9141C318.8 40.3136 318.52 39.553 318.52 38.5121C318.52 36.3503 320.12 34.789 322.76 34.789C324.44 34.789 325.64 35.1893 326.72 36.2302L325.2 37.7114C324.44 36.9908 323.52 36.8707 322.68 36.8707C321.4 36.8707 320.8 37.5913 320.8 38.432C320.8 38.7523 320.92 39.0726 321.16 39.3128C321.4 39.553 321.8 39.7131 322.28 39.7932L323.72 39.9933C324.84 40.1535 325.52 40.4737 326.04 40.9541C326.68 41.5546 327 42.4754 327 43.5563C326.96 45.9183 324.96 47.2394 322.44 47.2394Z"
                    fill="#002F9F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_171_2">
                    <rect width="327" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>

            <p className="max-w-screen-md text-black md:text-lg text-center mx-auto">
              We've compiled a list of the most frequently asked questions about
              our{" "}
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href="/our-services"
              >
                services.
              </Link>{" "}
              If you have any other questions, please feel free to{" "}
              <Link
                href="/contact-us"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                contact us.
              </Link>
            </p>
          </div>
          <section className="flex flex-col max-w-screen-sm border-t mx-auto">
            <div className="questions flex-col">
              {questions.map((question: any) => {
                return (
                  <AccordionItem
                    key={question.id}
                    {...question}
                  ></AccordionItem>
                );
              })}
            </div>
            <div className="mt-2">
              <p>
                Please see our full{" "}
                <span>
                  <button
                    className="font-bold"
                    onClick={() => {
                      window.open(
                        "/Shepherd-Moves-Terms-Of-Service-2023.pdf",
                        "_blank"
                      );
                    }}
                  >
                    Terms of Service
                  </button>
                </span>{" "}
                for a detailed explanation
              </p>
            </div>
          </section>
        </div>
      </div>
      {/* End FAQ */}
    </>
  );
}

export default About;
