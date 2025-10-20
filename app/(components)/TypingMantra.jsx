'use client';
import { Box, Typography } from "@mui/material";

const MedantaOrange = "#F37B2D";

export default function TypingMantra() {
  const text = `Aum Sarve Bhavantu`;

  // Calculate approximate steps based on longest line
  const lines = text.split('\n');
  const maxChars = Math.max(...lines.map(line => line.length));

  return (
    <Box display="flex" width="100%" justifyContent="center" marginY={5}>
      <Box display="flex" maxWidth="600px">
        <Typography
          textAlign="center"
          color={MedantaOrange}
          fontWeight="bold"
          sx={{
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
            overflow: "hidden",
            borderRight: "3px solid orange",
            width: "0ch",
            animation: `typing 10s steps(${maxChars}, end) forwards, blink 0.8s step-end infinite`,
          }}
        >
          {text}
        </Typography>
      </Box>

      <style jsx>{`
        @keyframes typing {
          from { width: 0ch; }
          to { width: ${maxChars}ch; }
        }

        @keyframes blink {
          0%, 100% { border-color: orange; }
          50% { border-color: transparent; }
        }
      `}</style>
    </Box>
  );
}
