import React from "react";
import Footer from "../components/Footer";
import healingImg from "../images/non-fiction-books/healing-the-opressed-body.jpg";
import serialImg from "../images/non-fiction-books/raised-by-a-serial-killer.jpg";
import ghostsImg from "../images/fiction-books/comfort-of-ghosts.jpg";
import returnImg from "../images/non-fiction-books/return.jpg";
import feverImg from "../images/fiction-books/american-fever.jpg";
import laythisImg from "../images/fiction-books/lay-this-body-down.jpg";
import hamiltonImg from "../images/fiction-books/hamilton-affair.jpg";
import cultImg from "../images/non-fiction-books/manhattan-cult-story.jpg";
import yearofImg from "../images/non-fiction-books/year-of-no-garbage.jpg";

export default function Testimonials() {
  return (
    <div className="Testimonials">
      <main>
        <h4 className="page-subtitle mb-4 text-center">Testimonials</h4>
        <div className="container">
          <div className="grid-2-columns-left-short testimonial-container">
            <div className="testimonial-book-cover-img">
              <img src={healingImg} alt="" />
            </div>
            <div className="testimonial">
              <div>
                “It is a vulnerable thing to allow someone into your book
                project. My fears and doubts were resolved the moment I met
                Lilly. Lilly brings a warmth, understanding, and knowing to her
                editing work. The moment she began working on my project I felt
                deeping known and seen, and that showed up in her ability to
                bring my voice and personality to the editing work. She
                immediately got me and got the project. Her editing took my
                project from rough, rough draft to acceptance from my publisher
                with an efficiency, skill level, and precision only someone who
                has been doing this for decades, and has a true gift with words
                can produce. That is Lilly. She is both gifted and experienced.
                Kind and professional. If I ever do this again, I can't imagine
                doing it without her.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Andrea Gutiérrez-Glik (
                <span className="book-title">Healing the Oppressed Body</span>)
              </div>
            </div>
          </div>
          <div className="grid-2-columns-right-short testimonial-container">
            <div className="testimonial">
              <div>
                “I was referred to Lilly after a succession of other
                collaborators not working out for one reason or another. Lilly
                was a breath of fresh air. I can honestly say that if it wasn’t
                for Lilly, I would have never finished writing my book. She was
                extremely patient with me. She took the time to listen to me.
                Which helped her understand where I was coming from. She cried
                with me. Laughed with me. She kept reassuring me that my ideas
                mattered and that my voice needed to be heard.”
              </div>
              <br />
              <div className="grid-2-columns-right-short-start-align">
                <div className="testimonial-byline">
                  —April Balascio
                  <span className="book-title">
                    (Raised by a Serial Killer)
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-book-cover-img">
              <img src={serialImg} alt="" />
            </div>
          </div>
          <div className="grid-2-columns-left-short testimonial-container">
            <div className="testimonial-book-cover-img">
              <img src={ghostsImg} alt="" />
            </div>
            <div className="testimonial">
              <div>
                “I am most grateful to Lilly Golden, who offered sound editorial
                advice and wise professional counsel ... for respectfully
                directing me to the places where I needed to wield the scalpel
                with a steady hand or add more clay with care.” (In reference to
                The White Lady) And “Lilly was
                <span className="book-title">The Comfort of Ghosts</span> first
                reader, demonstrating an ability to identify elements of the
                story that remained clear in my mind’s eye but not in the novel.
                Thank you, Lilly for your sensitive commentary and wise
                counsel.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Jacqueline Winspear, internationally bestselling author of the
                Maisie Dobbs series
              </div>
            </div>
          </div>

          <div className="grid-2-columns-right-short testimonial-container">
            <div className="testimonial">
              <div>
                “Working with Lilly on my first book was like being sent an
                angel who literally chased all the demons of self-doubt away and
                instilled an atmosphere of relaxation in which I was able to
                write and perceive my work with greater clarity. It was always a
                pleasure to meet her online and I would recommend her to
                anyone.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Lynx Vilden
                <span className="book-title">
                  (Return: A Journey Back to Living Wild)
                </span>
              </div>
            </div>
            <div className="testimonial-book-cover-img">
              <img src={returnImg} alt="" />
            </div>
          </div>
          <div className="grid-2-columns-left-short testimonial-container">
            <div className="testimonial-book-cover-img">
              <img src={feverImg} alt="" />
            </div>
            <div className="testimonial">
              <div>
                “I could not have asked for a more sincere and enthusiastic
                champion for my debut novel than Lilly. I felt supported,
                guided, and in extremely competent hands throughout the
                process.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Dur e Aziz Amna
                <span className="book-title">(American Fever)</span>
              </div>
            </div>
          </div>
          <div className="grid-2-columns-right-short testimonial-container">
            <div className="testimonial">
              <div>
                “Lilly Golden is the best and most discerning editor I’ve had
                during forty years of writing and publishing books. She’s a
                thoughtful and astute reader whose ideas and suggestions always
                seem to be spot on. She listens and cares deeply about the
                writing and the writer. I look forward to working with her in
                the future.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Charles Fergus
                <span className="book-title">
                  (Gideon Stoltz Mystery series)
                </span>
              </div>
            </div>
            <div className="testimonial-book-cover-img">
              <img src={laythisImg} alt="" />
            </div>
          </div>
          <div className="grid-2-columns-left-short testimonial-container">
            <div className="testimonial-book-cover-img">
              <img src={hamiltonImg} alt="" />
            </div>
            <div className="testimonial">
              <div>
                “Lilly is Golden, though—as true as it is—she would never let me
                get away with that cliché. In our work on
                <span className="book-title">The Hamilton Affair</span> and
                <span className="book-title">The Tubman Command</span>, Lilly
                continuously surprised me with her wide-ranging knowledge and
                unerring taste, helping me avoid errors of fact and inapt
                imagery. She’s an author’s best friend and secret weapon.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Elizabeth Cobbs, <em>New York Times</em> bestselling author of
                <span className="book-title">
                  The Hamilton Affair and The Tubman Command
                </span>
              </div>
            </div>
          </div>
          <div className="grid-2-columns-right-short testimonial-container">
            <div className="testimonial">
              <div>
                “With patience, support, and astute attention to detail, Lilly
                turned my manuscript into a published work of which I’m proud. I
                simply couldn’t have been luckier than having Lilly’s expertise.
                With penetrating questions and wise commentary, she motivated me
                to write a more profound and engaging story.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Spencer Schneider, (
                <span className="book-title">
                  Manhattan Cult Story: My Unbelievable True Story of Sex,
                  Crimes, Chaos, and Survival
                </span>
                )
              </div>
            </div>
            <div className="testimonial-book-cover-img">
              <img src={cultImg} alt="" />
            </div>
          </div>
          <div className="grid-2-columns-left-short testimonial-container">
            <div className="testimonial-book-cover-img">
              <img src={yearofImg} alt="" />
            </div>
            <div className="testimonial">
              <div>
                “I can say unreservedly that Lilly Golden is a kick-ass editor.
                She knows when to hold an author’s hand and when to hold her
                feet to the fire, all in the service of a final work that is
                better than you ever imagined it could be.”
              </div>
              <br />
              <div className="testimonial-byline">
                —Eve O. Schaub (
                <span className="book-title">
                  Year of No Garbage: Recycling Lies, Plastic Problems, and One
                  Woman’s Trashy Journey to Zero Waste
                </span>
                )
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
