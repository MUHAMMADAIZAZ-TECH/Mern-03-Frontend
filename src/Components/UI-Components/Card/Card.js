import React, { useMemo } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import CenterFocusWeakRoundedIcon from "@mui/icons-material/CenterFocusWeakRounded";
import CloseFullscreenRoundedIcon from "@mui/icons-material/CloseFullscreenRounded";

const Card = ({ content }) => {
  const cardMarkup = useMemo(() => {
    const handleFullScreen = () => {
      // handle full screen logic
    };

    const handleCenterFocus = () => {
      // handle center focus logic
    };

    const handleRefresh = () => {
      // handle refresh logic
    };

    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            minHeight: 200,
            height: "auto",
            padding: 2,
            borderTop: "4px solid",
            borderColor: "#2684ff",
          },
        }}
      >
        <Paper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="span">{content?.Heading}</Typography>
            <div>
              <IconButton variant="text" onClick={handleFullScreen}>
                <CloseFullscreenRoundedIcon />
              </IconButton>
              <IconButton variant="text" onClick={handleCenterFocus}>
                <CenterFocusWeakRoundedIcon />
              </IconButton>
              <IconButton variant="text" onClick={handleRefresh}>
                <CachedIcon />
              </IconButton>
            </div>
          </div>
          <div
            style={{
              paddingLeft: 10,
              marginTop: "-20px",
            }}
          >
            <h2>{content?.Title}</h2>
            <p>{content?.Text}</p>
          </div>
          {/* <CachedIcon fontSize="small"/> */}
          <p>{content?.CreatedAt}</p>
        </Paper>
      </Box>
    );
  }, [content?.CreatedAt, content?.Heading, content?.Text, content?.Title]);

  return cardMarkup;
};
export default Card;
