import React from "react";
import "./book.css";

const SingleBook = ({ title, link }) => {
  return (
    <a className="card" href={link} target="_blank" rel="noopener noreferrer">
      <div className="content">
        <h2 className="title">{title}</h2>
        <button className="btn btn-primary">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  text-decoration-none"
          >
            বইটি পড়ব
          </a>
        </button>
        <button className="btn btn-secondary">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  text-decoration-none"
          >
            বইটি ডাউনলোড করব
          </a>
        </button>
      </div>
    </a>
  );
};
const BookList = () => {
  const list = [
    {
      title: "আমার বাংলা বই",
      link:
        "https://drive.google.com/file/d/1BZHgbqzUEu17_tPAiAQArB_niU_L-cF0/view",
    },
    {
      title: "প্রাথমিক গণিত",
      link:
        "https://drive.google.com/file/d/11CRVsW4i9fuo3H9fO76N3hXLvLqlo4cg/view",
    },
    {
      title: "English for Today",
      link:
        "https://drive.google.com/file/d/1kCnyERAJiP8enX2Dwm8ee2TLWtE01JHB/view",
    },
    {
      title: "প্রাথমিক বিজ্ঞান",
      link:
        "https://drive.google.com/file/d/1BszeK3WHZjKg3gDRfCT9uVzvAN6pOe3H/view",
    },
    {
      title: "বাংলাদেশ ও বিশ্বপরিচয়",
      link:
        "https://drive.google.com/file/d/1Pz7fnpRjKbA4oliwIp9SeEBzL6KXw2Q3/view",
    },
    {
      title: "ইসলাম ও নৈতিক শিক্ষা",
      link:
        "https://drive.google.com/file/d/1sAVJVdihKJQeVuYpMAzHbJUn-BzK3aat/view",
    },
    {
      title: "হিন্দুধর্ম ও নৈতিক শিক্ষা",
      link:
        "https://drive.google.com/file/d/1o4YekRA-eKjtSPHX80QvxAWkmCAMacMI/view",
    },
    {
      title: "Nut Boltu - Muhammed Zafar Iqbal",
      link:
        "https://drive.google.com/file/d/1Vpk7gAWQRpciUqip0gtw3Z5-76uaRBDi/view",
    },
    {
      title: "Kato Nadi Sharobar",
      link:
        "https://drive.google.com/file/d/1pLCL53TaTTjT6FbBmbMYXCJmJk7at8W0/view",
    },
    {
      title: "Gerila O Birungana By Selina Hossain",
      link:
        "https://drive.google.com/file/d/1EKvh5DetOPdhG_9jk1tnnAsL-3sSINOp/view",
    },
    {
      title: "Misir Ali Omnibus By Humayun Ahmed",
      link:
        "https://drive.google.com/file/d/1BZHgbqzUEu17_tPAiAQArB_niU_L-cF0/view",
    },
    {
      title: "Mohabisso By Humayun Azad",
      link:
        "https://drive.google.com/file/d/1tpeYNc5_BkBgxDVp-J9efcWl0z0U2koE/view",
    },
    {
      title: "Himu Mama By Humayun Ahmed",
      link:
        "https://drive.google.com/file/d/1ihIkdTqPamgcvCrboMvLIIyIkHJJqBnW/view",
    },
    {
      title: "Shuvro Samagra By Humayun Ahmed",
      link:
        "https://drive.google.com/file/d/1x8_mw5ureCDZFxox7UW4W6S08Vzi0lqZ/view",
    },
    {
      title: "Neurone Onuronon By Muhammed Zafar Iqbal and Muhammad Kaykobad",
      link:
        "https://drive.google.com/file/d/1iW7DArctSFoYYfENXLBtZjn1VXnluhWP/view",
    },
    {
      title: "Nuliachorir Sonar Pahar By Shahriar Kabir",
      link:
        "https://drive.google.com/file/d/1-YkGGw8yq7O2XvKot_YJsbuRt431SIiW/view",
    },
  ];
  return (
    <>
      <main className="page-content">
        {list.map((book) => (
          <SingleBook title={book.title} link={book.link} />
        ))}
      </main>
    </>
  );
};

export default BookList;
