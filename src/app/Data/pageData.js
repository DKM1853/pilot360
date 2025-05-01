import image1 from "../assets/images/us-image-1.jpg";
import image2 from "../assets/images/us-image-2.jpg";
import saImage1 from "../assets/images/sa-image-1.jpg";
import saImage2 from "../assets/images/sa-image-2.jpg";
import canadaImage1 from "../assets/images/canada-image-1.jpg";
import canadaImage2 from "../assets/images/canada-image-2.jpg";
import AusImage1 from "../assets/images/Australia-image-1.jpg";
import AusImage2 from "../assets/images/Australia-image-2.jpg";
import euroImage1 from "../assets/images/europe-image-1.jpg";
import euroImage2 from "../assets/images/europe-image-2.jpg";
import indiaImage1 from "../assets/images/india-image-1.jpg";
import indiaImage2 from "../assets/images/india-image-2.jpg";
import NZimage1 from "../assets/images/nz-image-1.jpg"
import NZimage2 from "../assets/images/nz-image-2.jpg"
import fac1 from "../assets/accomodation.jpg"


const pageData = {
  USA: {
    country: "USA",
    description:
      "The USA stands as the top choice for aspiring commercial pilots worldwide, offering world-class flight schools, cutting-edge technology, and vast airspace for an unmatched training experience.",
    images: [
      { src: image1, alt: "Flying School" },
      { src: image2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "Life in the USA offers a dynamic and culturally enriching experience. Students can explore vibrant cities, enjoy a variety of recreational activities, and immerse themselves in a global community. With access to high-quality education, entertainment hubs, and scenic landscapes, international trainees find the USA a welcoming and stimulating environment. The country provides state-of-the-art infrastructure, safety, and endless career opportunities, making it a prime location for aviation students aiming to establish themselves in the industry.",
      },
      {
        description:
          "As an FAA-accredited program, the training provides in-depth exposure to air traffic control systems, weather analysis, and technical aircraft inspections. The combination of classroom learning and extensive flight hours equips graduates with the confidence and expertise required for successful aviation careers. With strong employability and competitive industry skills, pilots trained in the USA are well-prepared for global opportunities in commercial aviation.",
      },
    ],
    WeatherConditions:
      "The USA offers diverse weather conditions that enhance pilot adaptability and skill development. From Florida’s clear skies, ideal for uninterrupted training, to the Midwest’s unpredictable weather, students gain hands-on experience in various meteorological scenarios. Training across different climates helps pilots master crosswinds, turbulence, stormy conditions, and extreme temperatures. This exposure ensures they are well-prepared to handle real-world flying challenges, equipping them with the confidence and expertise needed for a successful career in commercial aviation.",
    LifeIn:
      "Life in the USA offers a vibrant and culturally enriching experience for students, with dynamic cities, diverse recreational activities, and a global community. International trainees benefit from world-class education, entertainment hubs, and stunning landscapes, making the environment both welcoming and inspiring. With state-of-the-art infrastructure, a strong focus on safety, and abundant career opportunities, the USA stands as an ideal destination for aviation students looking to build a successful future in the industry.",
    Advantages: [
      "World-class training",
      "Advanced aviation technology",
      "Diverse weather conditions",
      "Global recognition of licenses",
      "Extensive airspace",
      "High employment opportunities",
    ],
    FacilitiesDescription:
      "We offer personalized training support, visa assistance, accommodation arrangements, and 24/7 student support to ensure a seamless and hassle-free training experience.",
  },

  Canada: {
    country: "Canada",
    description:
      "Canada is a top choice for pilot training, providing high-quality education at affordable rates while adhering to Transport Canada regulations.",
    images: [
      { src: canadaImage1, alt: "Flying School" },
      { src: canadaImage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "Canada provides a structured and efficient aviation training program designed to equip pilots with the skills needed for real-world flying. The curriculum blends practical flight experience with essential aviation knowledge, covering aerodynamics, navigation, meteorology, and regulatory compliance. With access to modern aircraft and advanced flight simulation systems, students gain hands-on training that enhances their adaptability and confidence in diverse flying conditions.",
      },
      {
        description:
          "Canada’s aviation training also emphasizes safety, precision, and industry readiness, ensuring pilots meet global aviation standards. Students train under experienced instructors, gaining exposure to diverse weather conditions and complex airspace, which enhances their decision-making and problem-solving skills. The program’s structured approach, combined with extensive flight hours and simulator training, prepares graduates for successful careers in commercial aviation, making them highly competitive in the global job market.",
      },
    ],
    WeatherConditions:
      "Canada's diverse climate provides an ideal training environment for pilots, offering exposure to a wide range of weather conditions. From snowy winters to clear summer skies, students train in challenging yet controlled settings, enhancing their adaptability. Experiencing fluctuating temperatures, varying wind patterns, and dynamic meteorological changes prepares pilots for real-world flying scenarios, building resilience and confidence in handling diverse flight conditions.",
    LifeIn:
      "Life in Canada is welcoming and inclusive, offering international students a safe and multicultural environment. With access to high-quality education, stunning natural landscapes, and vibrant city life, students find the country an excellent place to live and study. The strong aviation industry and well-established institutions create an enriching learning atmosphere. Canada provides a perfect blend of professional development opportunities, cultural experiences, and a high standard of living for aspiring pilots.",
    Advantages: [
      "Affordable training costs",
      "Transport Canada certification",
      "Diverse weather training",
      "Modern aircraft fleets",
      "Safe learning environment",
      "Global job opportunities",
    ],
    FacilitiesDescription:
      "We provide visa support, housing assistance, and mentorship from experienced instructors throughout the training period.",
  },

  NewZealand: {
    country: "New Zealand",
    description:
      "New Zealand is an excellent choice for pilot training, offering globally recognized licenses and high-quality training programs in a safe and scenic environment. With advanced flight schools and modern training facilities, it provides an ideal setting for aspiring pilots looking to gain world-class aviation education and hands-on experience.",
    images: [
      { src: NZimage1, alt: "Flying School" },
      { src: NZimage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "New Zealand’s aviation training adheres to the rigorous standards of the NZCAA (New Zealand Civil Aviation Authority), ensuring students receive top-quality pilot education. The training encompasses a blend of theoretical and practical learning, covering aerodynamics, meteorology, air navigation, aviation regulations, and emergency handling. Trainees benefit from structured flight operations, simulation-based learning, and exposure to controlled airspace to refine their flying skills.",
      },
      {
        description:
          "Students engage in cross-country flying, night flying, and instrument flight training, developing the expertise needed for commercial aviation. The program also includes advanced flight maneuvers, high-altitude flight training, and aircraft maintenance fundamentals. Training is conducted under experienced instructors, helping students gain confidence in managing real-world aviation challenges while preparing them for international aviation careers.",
      },
    ],
    WeatherConditions:
      "New Zealand's diverse climate offers excellent training opportunities, exposing pilots to various weather conditions. From clear skies and calm winds to occasional turbulence and seasonal changes, trainees gain valuable experience handling different flight scenarios. The ability to train in varied meteorological conditions enhances adaptability, ensuring pilots develop confidence in flying under real-world circumstances.",
    LifeIn:
      "New Zealand provides an exceptional quality of life, combining breathtaking natural landscapes with a safe and welcoming atmosphere for international students. The country offers a peaceful yet vibrant lifestyle, allowing students to explore scenic coastlines, mountains, and national parks. With modern infrastructure, excellent healthcare, and a strong education system, students find a comfortable and enriching environment to live and train in. The aviation industry in New Zealand is well-established, providing graduates with strong career prospects and global opportunities in the commercial pilot sector.",
    Advantages: [
      "NZCAA-accredited training",
      "Scenic and safe environment",
      "Modern training facilities",
      "Diverse weather conditions for training",
      "Global recognition of pilot licenses",
      "High employment rate for graduates",
    ],
    FacilitiesDescription:
      "We assist with visa processing, accommodation, and comprehensive student support to ensure a smooth and successful training experience.",
  },
  SouthAfrica: {
    country: "South Africa",
    description:
      "South Africa is a cost-effective destination for flight training, offering high-quality education under the SACAA (South African Civil Aviation Authority). With modern flight schools, experienced instructors, and extensive airspace, it provides an excellent learning environment for aspiring commercial pilots. The country's well-structured aviation programs prepare students for global opportunities in the aviation industry.",
    images: [
      { src: saImage1, alt: "Flying School" },
      { src: saImage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "South Africa’s aviation training programs follow SACAA regulations, ensuring that students receive internationally recognized pilot education. The curriculum includes essential flight theory, air navigation, meteorology, aviation law, and emergency response procedures. Students are trained in both single-engine and multi-engine aircraft, preparing them for commercial aviation careers with a strong foundation in flight operations.",
      },
      {
        description:
          "Trainees benefit from hands-on experience with flight simulators, advanced flight maneuvers, and cross-country navigation. The program emphasizes technical proficiency, situational awareness, and decision-making in real-world aviation scenarios. With year-round flying opportunities, students gain extensive flight hours, ensuring they meet international standards for commercial pilot licensing and career readiness.",
      },
    ],
    WeatherConditions:
      "South Africa boasts an ideal climate for pilot training, with mostly clear skies and mild weather conditions throughout the year. The stable climate allows for uninterrupted flight training, maximizing flight hours and reducing delays. Students are exposed to occasional wind variations, turbulence, and seasonal weather changes, enhancing their adaptability to different flying conditions. The favorable weather ensures a smooth training experience and contributes to faster course completion.",
    LifeIn:
      "South Africa offers a dynamic and culturally rich experience for students. With affordable living costs, beautiful landscapes, and welcoming communities, international trainees find the country an exciting and comfortable place to live and study. Students can explore vibrant cities, enjoy diverse wildlife, and experience a unique blend of modern and traditional lifestyles. The aviation industry in South Africa is well-established, providing graduates with career prospects locally and internationally. With its warm hospitality, strong aviation infrastructure, and affordable training, South Africa is an attractive destination for aspiring pilots.",
    Advantages: [
      "SACAA-approved training",
      "Cost-effective training programs",
      "Ideal flying weather conditions",
      "Extensive airspace for training",
      "High standard of aviation education",
      "Global career opportunities",
    ],
    FacilitiesDescription:
      "We provide visa guidance, accommodation support, and expert aviation mentorship to ensure students have a seamless training experience.",
  },
  Europe: {
    country: "Europe",
    description:
      "Europe offers some of the most prestigious pilot training programs, ensuring top-tier aviation education and global job prospects. The region is home to world-class aviation academies that provide rigorous training under EASA (European Union Aviation Safety Agency) regulations. European pilot training prepares students for international airline careers with structured, high-standard programs.",
    images: [
      { src: euroImage1, alt: "Flying School" },
      { src: euroImage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "Europe’s pilot training follows EASA (European Union Aviation Safety Agency) regulations, providing internationally recognized qualifications. The structured training programs cover all essential aspects of aviation, including aerodynamics, air navigation, meteorology, radio communication, and aviation law. Students learn through both theoretical coursework and practical flight experience, ensuring a well-rounded education.",
      },
      {
        description:
          "Pilots undergo rigorous simulator-based training, emergency response drills, and cross-border flight operations to prepare them for diverse aviation challenges. The training includes exposure to multi-engine aircraft, instrument flying (IFR), night flying, and international flight procedures. With access to advanced simulation technology and extensive airspace, students gain valuable experience in real-world scenarios, preparing them for commercial airline operations.",
      },
    ],
    WeatherConditions:
      "Europe presents varying weather conditions across different regions, helping pilots gain experience in diverse meteorological scenarios. Students are exposed to clear skies, strong winds, heavy rains, and even icy conditions depending on the country. This variety enhances their ability to adapt to different climates and improves their proficiency in handling turbulence, low-visibility landings, and crosswind takeoffs. Training in such a dynamic environment ensures that pilots develop resilience and strong decision-making skills, making them ready to fly in any part of the world.",
    LifeIn:
      "Europe offers an unparalleled blend of history, culture, and modern infrastructure, making it an exciting destination for student pilots. With world-class amenities, efficient public transport, and a high standard of living, students enjoy a comfortable and enriching experience. The aviation industry in Europe is well-established, providing excellent career prospects. From exploring iconic landmarks to experiencing diverse cuisines, Europe provides a perfect balance of education and lifestyle for aspiring pilots.",
    Advantages: [
      "EASA-accredited training",
      "Highly respected pilot licenses worldwide",
      "Strong aviation job market with European and international airlines",
      "Exposure to complex airspace and cross-border operations",
      "Advanced flight simulation technology",
      "Opportunities to work and settle in Europe after training",
    ],
    FacilitiesDescription:
      "Visa assistance, housing arrangements, and professional aviation mentorship are available. Students receive career guidance, licensing support, and job placement assistance to ensure a smooth transition into the aviation industry.",
  },
  India: {
    country: "India",
    description:
      "India is an emerging hub for commercial pilot training, offering DGCA-approved programs at competitive costs. With a rapidly growing aviation industry and increasing demand for pilots, India provides structured training programs that prepare students for both domestic and international careers. The country has several well-established flight schools that adhere to global aviation standards, ensuring high-quality education and practical experience.",
    images: [
      { src: indiaImage1, alt: "Flying School" },
      { src: indiaImage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "India’s aviation training follows DGCA (Directorate General of Civil Aviation) guidelines, covering all essential aspects of flight training. The curriculum includes aerodynamics, air navigation, aviation regulations, meteorology, and aircraft operations. The training integrates classroom learning with hands-on flight experience, ensuring that students develop a deep understanding of both theoretical and practical aviation concepts.",
      },
      {
        description:
          "Students gain expertise in night flying, cross-country navigation, and aircraft maintenance, ensuring a well-rounded education. The training incorporates simulator-based exercises, instrument flight rules (IFR) practice, emergency handling, and real-world flying conditions. With exposure to multi-engine aircraft and controlled airspace operations, trainees develop the necessary skills for commercial aviation. The DGCA-approved program ensures pilots are well-prepared to meet airline industry requirements both in India and internationally.",
      },
    ],
    WeatherConditions:
      "India’s diverse climate helps pilots gain experience in different weather conditions, preparing them for real-world flying challenges. Students train in various meteorological scenarios, from monsoons with heavy rain and turbulence to extreme heat in desert regions and foggy winters in the northern states. This exposure ensures that pilots develop strong adaptability and confidence in handling different flight conditions, enhancing their skills for global aviation careers.",
    LifeIn:
      "India provides a vibrant and diverse environment for student pilots. With a mix of modern cities and rich cultural heritage, students experience an exciting lifestyle. The cost of living is affordable, and flight schools offer strong community support. India's growing aviation sector opens excellent career prospects. The country’s well-connected transport, delicious cuisine, and welcoming atmosphere make it a great place for training and career development in aviation.",
    Advantages: [
      "DGCA-approved training programs",
      "Affordable course fees compared to Western countries",
      "Rapidly expanding aviation job market",
      "Diverse weather conditions for real-world flight training",
      "Access to modern flight schools with advanced training technology",
      "Strong career prospects within India and internationally",
    ],
    FacilitiesDescription:
      "Visa guidance, accommodation support, and career mentorship services are provided. Students receive assistance with DGCA licensing, job placement support, and interview preparation for major airlines to ensure a smooth transition into their aviation careers.",
  },
  Australia: {
    country: "Australia",
    description:
      "Australia is known for its excellent flight training programs, world-class facilities, and favorable weather conditions that allow year-round flying. It is home to some of the best aviation academies, providing internationally recognized pilot licenses under CASA regulations.",
    images: [
      { src: AusImage1, alt: "Flying School" },
      { src: AusImage2, alt: "Course Location" },
    ],
    AviationTraining: [
      {
        description:
          "Australia's aviation training meets CASA (Civil Aviation Safety Authority) standards, ensuring high-quality education for aspiring pilots. The curriculum includes comprehensive theoretical and practical training, covering aerodynamics, air navigation, aviation regulations, and emergency procedures. Flight training includes single-engine and multi-engine aircraft operations, focusing on building confidence and technical skills.",
      },
      {
        description:
          "Students train in modern aircraft, learning advanced flight techniques such as instrument flying, cross-country navigation, night flying, and multi-crew cooperation. The structured programs incorporate the latest technology and simulation-based training, providing an immersive learning experience. Australia’s pilot training is recognized globally, offering great opportunities for aviation careers.",
      },
    ],
    WeatherConditions:
      "With clear skies and stable weather for most of the year, Australia provides ideal conditions for uninterrupted pilot training, enhancing skill development. Students gain exposure to different meteorological conditions, preparing them for diverse flying scenarios. The country offers a mix of coastal winds, mild turbulence, and occasional weather variations, ensuring well-rounded flight experience.",
    LifeIn:
      "Australia offers a high standard of living, excellent infrastructure, and diverse cultural experiences, making it a great place for students to train and live. The country is known for its friendly and welcoming environment, ensuring international students feel at home. With vibrant cities, scenic landscapes, and strong aviation networks, Australia provides both professional and personal growth opportunities.",
    Advantages: [
      "CASA-approved training",
      "Favorable climate for year-round flying",
      "Modern aircraft fleet",
      "Global aviation career opportunities",
      "High safety and training standards",
      "Pathway to international airlines",
    ],
    FacilitiesDescription:
      "Visa support, accommodation assistance, and personalized training guidance are provided to international students. Our program ensures seamless integration into the aviation industry with career counseling and mentorship from experienced pilots.",
  },
};

export default pageData;
