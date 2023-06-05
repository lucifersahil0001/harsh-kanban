import React from "react";
import { useState } from "react";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";

function NavBar() {
  const [star, setStar] = useState(true);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftside}>
          <Button variant="text">Kanban Board</Button>
          {star ? (
            <Button
              onClick={() => {
                setStar(!star);
              }}
            >
              <StarBorderIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setStar(!star);
              }}
            >
              <StarIcon />
            </Button>
          )}
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<PeopleIcon />}
          >
            Workspace Visible
          </Button>
        </div>
        <div className={styles.rightside}>
          <Button
            variant="text"
            sx={{ color: "white", textTransform: "none" }}
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
