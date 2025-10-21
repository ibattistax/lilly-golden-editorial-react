import React from "react";
import Footer from "../components/Footer";
import healingImg from "../images/non-fiction-books/healing-the-opressed-body.jpg";
import serialImg from "../images/non-fiction-books/raised-by-a-serial-killer.jpg";
import climateImg from "../images/non-fiction-books/surviving-climate-anxiety.jpg";
import cultImg from "../images/non-fiction-books/manhattan-cult-story.jpg";
import returnImg from "../images/non-fiction-books/return.jpg";
import ghostsImg from "../images/fiction-books/comfort-of-ghosts.jpg";
import whiteladyImg from "../images/fiction-books/white-lady.jpg";
import feverImg from "../images/fiction-books/american-fever.jpg";
import oilmarbleImg from "../images/fiction-books/oil-and-marble.jpg";
import gorillaImg from "../images/non-fiction-books/walking-with-gorillas.jpg";
import laythisImg from "../images/fiction-books/lay-this-body-down.jpg";
import hamiltonImg from "../images/fiction-books/hamilton-affair.jpg";
import yearofImg from "../images/non-fiction-books/year-of-no-garbage.jpg";
import wildrideImg from "../images/non-fiction-books/wild-ride-home.jpg";
import illuminationImg from "../images/non-fiction-books/illumination.jpg";
import ironheartImg from "../images/non-fiction-books/iron-heart.jpg";
import simpsonImg from "../images/non-fiction-books/oj-simpson.jpg";
import bobcatImg from "../images/fiction-books/bobcat.jpg";
import tubmanImg from "../images/fiction-books/tubman-command.jpg";
import kickdownImg from "../images/fiction-books/kickdown.jpg";
import devilImg from "../images/fiction-books/devil-himself.jpg";
import raphaelImg from "../images/fiction-books/raphael.jpg";
import thievesImg from "../images/fiction-books/thieves-beasts.jpg";
import solitaireImg from "../images/fiction-books/double-solitaire.jpg";
import kidImg from "../images/fiction-books/kid-cooper.jpg";
import luckyImg from "../images/fiction-books/lucky-supreme.jpg";

export default function Work() {
  return (
    <div className="Work">
      <main>
        <div class="content-container">
          <h3>Selected Nonfiction</h3>
          <div class="grid-5-columns">
            <div class="grid-img">
              <img src={healingImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={serialImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={climateImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={returnImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={gorillaImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={cultImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={wildrideImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={yearofImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={illuminationImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={ironheartImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={simpsonImg} class="img-fluid" alt="" />
            </div>
          </div>
          <br />
          <h3>Selected Fiction</h3>
          <br />
          <div class="grid-5-columns">
            <div class="grid-img">
              <img src={ghostsImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={whiteladyImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={oilmarbleImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={feverImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={bobcatImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={tubmanImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={kickdownImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={hamiltonImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={devilImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={raphaelImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={laythisImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={thievesImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={solitaireImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={kidImg} class="img-fluid" alt="" />
            </div>
            <div class="grid-img">
              <img src={luckyImg} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
