import Image from "next/image";
import { Container, Typography, Box, List, ListItem, ListItemText, Button, Stack } from "@mui/material";
import { Launch } from "@mui/icons-material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", py: 3 }}>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <List sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <ListItem>
            <ListItemText 
              primary={
                <Typography variant="body1">
                  Get started by editing{" "}
                  <Typography component="code" sx={{ bgcolor: "action.hover", px: 1, py: 0.5, borderRadius: 1, fontFamily: "monospace" }}>
                    src/app/page.tsx
                  </Typography>
                  .
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Save and see your changes instantly." />
          </ListItem>
        </List>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
          <Button
            variant="contained"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Image
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
            }
            endIcon={<Launch />}
          >
            Deploy now
          </Button>
          <Button
            variant="outlined"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Button>
        </Stack>
      </Box>
      
      <Box component="footer" sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", mt: 4 }}>
        <Button
          variant="text"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={
            <Image
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
          }
        >
          Learn
        </Button>
        <Button
          variant="text"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={
            <Image
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
          }
        >
          Examples
        </Button>
        <Button
          variant="text"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={
            <Image
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
          }
        >
          Go to nextjs.org →
        </Button>
      </Box>
    </Container>
  );
}
