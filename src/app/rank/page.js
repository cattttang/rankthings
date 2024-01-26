"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

// CSS for ChatGPT-like light mode colors
const chatGptLightMode = {
  backgroundColor: "#F8F9FA",
  primaryText: "#333333",
  secondaryText: "#777777",
  accentColor: "#ADD8E6",
  borderColor: "#DDDDDD",
};

const Questionnaire = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: "Instantly become Elon Musk", points: 0 },
    {
      id: 2,
      text: "Be a professional writer with capped 100k salary",
      points: 0,
    },
    { id: 3, text: "Ability to read online essays", points: 0 },
    { id: 4, text: "A stable friend group forever", points: 0 },
    { id: 5, text: "Always feel different™", points: 0 },
    { id: 6, text: "Be in $500,000 debt", points: 0 },
    { id: 7, text: "Become a UX designer", points: 0 },
    { id: 8, text: "Have a 250k salary", points: 0 },
    { id: 9, text: "Have a 500k salary", points: 0 },
    { id: 10, text: "Never fight with Preston again", points: 0 },
    { id: 11, text: "Be bald forever", points: 0 },
    {
      id: 12,
      text: "Maintain your ideal weight regardless of caloric intake",
      points: 0,
    },
    { id: 13, text: "Have a really cute dog", points: 0 },
    { id: 14, text: "Access to the internet", points: 0 },
    { id: 15, text: "Live in New York", points: 0 },
    { id: 16, text: "Feet are always warm", points: 0 },
    { id: 17, text: "Never be able to climb", points: 0 },
    { id: 18, text: "Never be sick", points: 0 },
    { id: 19, text: "Never feel sleepy", points: 0 },
    { id: 20, text: "Pay for a $12.00 coffee every time you study", points: 0 },
    { id: 21, text: "Never have to be cold", points: 0 },
    { id: 22, text: "Live in a walkable city", points: 0 },
    { id: 23, text: "Be 2x less racist than you currently are", points: 0 },
    { id: 24, text: "Always have fast wifi when facetiming", points: 0 },
    { id: 25, text: "Always feel like your friends love you", points: 0 },
    { id: 26, text: "Have a really cute wasian baby", points: 0 },
    {
      id: 27,
      text: "Always have to pay for things with your own money",
      points: 0,
    },
    { id: 28, text: "Have a guaranteed spot in a T10 med school", points: 0 },
    { id: 29, text: "Always have clear skin", points: 0 },
    { id: 30, text: "Never experience feelings of insecurity", points: 0 },
    {
      id: 31,
      text: "Always know the CO2 emissions of your actions",
      points: 0,
    },
    { id: 32, text: "Your cooking account has 1M followers", points: 0 },
    { id: 33, text: "Always have picture perfect food", points: 0 },
    {
      id: 34,
      text: "Never experience harassment",
      points: 0,
    },
    {
      id: 35,
      text: "Never judge anyone again",
      points: 0,
    },
    {
      id: 36,
      text: "Parents live forever",
      points: 0,
    },
    {
      id: 37,
      text: "Purchase decisions only take 5 minutes to make",
      points: 0,
    },
    {
      id: 38,
      text: "Have 3x your current empathy",
      points: 0,
    },
    {
      id: 39,
      text: "Work at BCG for the rest of your life",
      points: 0,
    },
    {
      id: 40,
      text: "Live in India for 1 year",
      points: 0,
    },
    {
      id: 41,
      text: "Always feel caffeinated",
      points: 0,
    },
    {
      id: 42,
      text: "Likes on instagram mean nothing to you",
      points: 0,
    },
    {
      id: 43,
      text: "Never feel anger towards your friends",
      points: 0,
    },
    {
      id: 44,
      text: "Always feel loved",
      points: 0,
    },
    {
      id: 45,
      text: "Preston responds immediately every time you text him",
      points: 0,
    },
    {
      id: 46,
      text: "Nobody ever hangs up on you first",
      points: 0,
    },
    {
      id: 47,
      text: "Never get wrinkles",
      points: 0,
    },
    {
      id: 48,
      text: "The ability to change the temperature of any environment you're in",
      points: 0,
    },
    {
      id: 49,
      text: "Jess only interacts with you when you want her to",
      points: 0,
    },
    {
      id: 50,
      text: "Become good at all sports that require hand eye coordination",
      points: 0,
    },
  ]);

  const [selected, setSelected] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [answeredQuestionPairs, setAnsweredQuestionPairs] = useState([]);

  useEffect(() => {
    // Shuffle questions array to randomize the order
    const remainingQuestions = questions.filter(
      (question) =>
        !answeredQuestionPairs.some(
          (pair) =>
            (pair[0] === currentQuestions[0]?.id && pair[1] === question.id) ||
            (pair[1] === currentQuestions[0]?.id && pair[0] === question.id) ||
            (pair[0] === currentQuestions[1]?.id && pair[1] === question.id) ||
            (pair[1] === currentQuestions[1]?.id && pair[0] === question.id)
        )
    );

    const shuffledQuestions = [...remainingQuestions].sort(
      () => Math.random() - 0.5
    );

    // Take the first 2 questions to ensure uniqueness
    setCurrentQuestions(shuffledQuestions.slice(0, 2));
  }, [questions, answeredQuestionPairs]);

  useEffect(() => {
    // Update rankings whenever questions change
    const sortedRankings = [...questions].sort((a, b) => b.points - a.points);
    setRankings(sortedRankings);
  }, [questions]);

  useEffect(() => {
    // Add a class to trigger fade-in effect when rankings change
    const rankingsContainer = document.getElementById("rankingsContainer");

    if (rankingsContainer) {
      rankingsContainer.classList.add("fadeIn");

      // Remove the class after a short delay to ensure the transition is triggered
      setTimeout(() => {
        rankingsContainer.classList.remove("fadeIn");
      }, 50); // You can adjust the delay time as needed
    }

    // Cleanup
    return () => {
      if (rankingsContainer) {
        rankingsContainer.classList.remove("fadeIn");
      }
    };
  }, [rankings]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setSelected("left");
      updatePoints(currentQuestions[0].id);
    } else if (event.key === "ArrowRight") {
      setSelected("right");
      updatePoints(currentQuestions[1].id);
    }
  };

  const handleQuestionClick = (questionId) => {
    if (questionId === currentQuestions[0].id) {
      setSelected("left");
      updatePoints(currentQuestions[0].id);
    } else if (questionId === currentQuestions[1].id) {
      setSelected("right");
      updatePoints(currentQuestions[1].id);
    }
  };

  const updatePoints = (questionId) => {
    setAnsweredQuestionPairs((prevPairs) => [
      ...prevPairs,
      [currentQuestions[0].id, currentQuestions[1].id],
    ]);

    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? { ...question, points: question.points + 1 }
          : question
      )
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestions]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto",
        color: chatGptLightMode.primaryText,
      }}
    >
      <Link
        className={styles.backButton}
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: chatGptLightMode.backgroundColor,
          color: chatGptLightMode.primaryText,
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </Link>
      <h1
        style={{
          padding: "80px",
        }}
      >
        if you could have one, <br />
        <span
          style={{
            fontStyle: "italic",
          }}
        >
          but not the other...
        </span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          className={styles.questionCard}
          onClick={() => handleQuestionClick(currentQuestions[0].id)}
          onMouseEnter={() => setSelected("left")}
          onMouseLeave={() => setSelected(null)}
        >
          <h2>{currentQuestions[0]?.text}</h2>
        </div>
        <div
          className={styles.questionCard}
          onClick={() => handleQuestionClick(currentQuestions[1].id)}
          onMouseEnter={() => setSelected("right")}
          onMouseLeave={() => setSelected(null)}
        >
          <h2>{currentQuestions[1]?.text}</h2>
        </div>
      </div>
      <div id={styles.rankingsContainer} className={styles.rankingsContainer}>
        <h2>Your Rankings</h2>
        <ol>
          {rankings
            .filter((question) => question.points > 0)
            .map((question, index) => (
              <ol key={question.id}>{`${index + 1}. ${question.text}`}</ol>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Questionnaire;
