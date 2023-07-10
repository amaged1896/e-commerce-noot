import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
const Blog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              padding: "8px",
              borderRadius: "15px",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-10px",
                left: "77%",
                transform: "translateX(-50%)",
                backgroundColor: "#FFDA47",
                width: "100px",
                borderRadius: "4px",
                padding: "5px",
                color: "#1C103B",
              }}
            >
              TRAINING
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="./../../public/assets/imgs/groomer1-.png"
                title="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    <PersonIcon sx={{ color: "#7C58D3", fontSize: "20px" }} />
                    by Corabelle Durrad
                  </Typography>
                  <Typography sx={{ display: "flex", fontSize: "14px" }}>
                    <CalendarMonthIcon
                      sx={{ fontSize: "20px", color: "#7C58D3" }}
                    />
                    02.01.2022
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    5 Crazy Things Dogs Do When Left
                  </Typography>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    Alone At Home
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Est pellentesque elit ullamcorper dignissim cras tincidunt
                  lobortis feugiat vivamus.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              padding: "8px",
              borderRadius: "15px",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-10px",
                left: "77%",
                transform: "translateX(-50%)",
                backgroundColor: "#FFDA47",
                width: "100px",
                borderRadius: "4px",
                padding: "5px",
                color: "#1C103B",
              }}
            >
              PET HEALTH
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="./../../public/assets/imgs/groomer2-.png"
                title="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    <PersonIcon sx={{ color: "#7C58D3", fontSize: "20px" }} />
                    by Corabelle Durrad
                  </Typography>
                  <Typography sx={{ display: "flex", fontSize: "14px" }}>
                    <CalendarMonthIcon
                      sx={{ fontSize: "20px", color: "#7C58D3" }}
                    />
                    02.01.2022
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    Your Dog Desperately Needs
                  </Typography>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    From You
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Amet porttitor eget dolor morbi non arcu risus quis varius
                  sodales ut etiam sit amet
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              padding: "8px",
              borderRadius: "15px",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-10px",
                left: "77%",
                transform: "translateX(-50%)",
                backgroundColor: "#FFDA47",
                width: "100px",
                borderRadius: "4px",
                padding: "5px",
                color: "#1C103B",
              }}
            >
              PET FOOD
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="./../../public/assets/imgs/groomer3-.png"
                title="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    <PersonIcon sx={{ color: "#7C58D3", fontSize: "20px" }} />
                    by Corabelle Durrad
                  </Typography>
                  <Typography sx={{ display: "flex", fontSize: "14px" }}>
                    <CalendarMonthIcon
                      sx={{ fontSize: "20px", color: "#7C58D3" }}
                    />
                    02.01.2022
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    Top Cat Foods to Consider If You Are a
                  </Typography>
                  <Typography
                    sx={{ color: "#0B0417", fontSize: "16px" }}
                    variant="h6"
                  >
                    First Time Owner
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Vel eros donec ac odio tempor orci dapibus ultrices. Arcu
                  felis bibendum ut tristique et egestas quis
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
