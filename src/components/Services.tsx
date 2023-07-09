import { Box, Container, Grid, Typography, colors } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '50px', textAlign: 'center' }}>
            <Typography sx={{ marginTop: '15px', color: "#7C58D3" }} variant="body2" color="text.secondary">OUR SERVICES</Typography>
            <Typography sx={{ marginTop: '15px', color: "#0B0417" }} variant="h4">All Pet Care Services</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Box sx={{ marginRight: '20px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="44" viewBox="0 0 50 44" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M38.8946 33.7158C38.8946 33.7158 38.8806 33.7941 38.8545 33.927C38.7489 34.4659 38.4441 35.9083 38.0643 36.7761C37.5897 37.8609 35.3164 41.8386 35.3164 41.8386L35.9011 43.9999H38.2208C38.2208 43.9999 38.5122 43.1639 37.1061 42.8903C36.0812 42.6905 38.9938 39.0099 38.9938 39.0099L41.6883 36.5591L38.8946 33.7158Z" fill="#CA7055" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.4111 22.7714L18.8355 22.0537C28.7404 27.9242 41.377 26.5108 41.5004 26.4999C41.5004 26.4999 41.5004 26.4999 41.0004 26.9999C40.5004 27.4999 41.5004 27.4999 39.0004 27.4999C36.5004 27.4999 26.0173 27.2785 18.4111 22.7714Z" fill="#362129" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.59679 43.9999L5.50278 43.991C5.88325 43.9878 6.11929 43.587 5.9526 43.2447C5.72928 42.7872 5.30364 42.4398 4.77811 42.3298L4.59679 42.2916L3.94019 40.2957L1.56386 38.7605L0 41.3799L2.19755 43.2606C2.75553 43.7378 3.46493 43.9999 4.19914 43.9999H4.59679Z" fill="#362129" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.1997 40.7812L12.6634 42.9654C12.5336 43.4916 12.9319 44 13.4739 44H18.81C19.2986 44 19.6588 43.5438 19.5468 43.0685L19.5436 43.0551C19.4787 42.7822 19.2694 42.5672 18.9977 42.4965L17.2054 42.0295L16.2205 40.7812H13.1997Z" fill="#362129" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.12305 12.0584H9.44419V7.37256H6.12305V12.0584Z" fill="#DFA278" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5581 22.2759H5.71303L5.1875 12.6083C5.1875 11.2303 6.30536 10.113 7.68344 10.113H7.75216C10.1444 10.113 12.0836 13.1027 12.0836 15.4949L11.5581 22.2759Z" fill="#F3B62C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M17.1402 40.7814H12.8717L10.3108 33.6575L6.8211 28.266C5.76877 26.6404 5.34822 24.6859 5.63834 22.7715L5.71342 22.2759H11.5585L14.5793 32.2119L17.1402 40.7814Z" fill="#27313F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.5964 41.3801L1.56348 38.7607L5.18746 32.2654L5.71299 22.2759H11.5581L9.10539 34.1601L4.5964 41.3801Z" fill="#3C4758" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.0579 20.948L16.1543 22.8516L16.7186 23.4159C17.2397 23.937 18.0834 23.937 18.6038 23.4159L18.6229 23.3969C19.1433 22.8771 19.1433 22.0328 18.6229 21.5123L18.0579 20.948Z" fill="#E2B188" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.15004 12.0395C8.62897 11.5184 7.78532 11.5184 7.26489 12.0395L7.2458 12.0586C6.72536 12.5784 6.72536 13.4227 7.2458 13.9431L16.1543 22.8516L18.058 20.948L9.15004 12.0395Z" fill="#F8D82B" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.63277 5.80372C6.37 5.15222 6.6983 3.6717 7.42106 4.14506C8.14318 4.61905 8.34042 5.80372 8.34042 5.80372L8.93148 4.46L9.44428 2.13138L10.1435 2.0843C10.949 2.03022 11.6227 1.35963 11.4261 0.654048C11.3193 0.269763 10.7047 0 8.34042 0C4.85958 0 4.07129 1.51105 4.07129 3.37522C4.07129 4.69604 4.95629 6.38969 5.84511 7.22761C6.22558 6.88341 6.81473 6.25481 6.63277 5.80372Z" fill="#64301F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.4439 2.13144L8.9311 4.46005L8.34003 5.80378C8.34003 5.80378 8.1428 4.61911 7.42068 4.14512C6.69792 3.67176 6.36962 5.15227 6.63238 5.80378C6.81435 6.25487 6.22519 6.88346 5.84473 7.22767C6.21183 7.57314 6.65911 7.86072 7.22344 8.0535C12.0836 9.71216 12.0836 5.71343 12.0836 3.8499C12.0836 3.16404 11.7331 1.88458 11.3443 1.35205L9.4439 2.13144Z" fill="#E2B188" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.6396 34.8243C24.6396 34.8243 27.0128 37.8458 26.3689 39.1367C25.7257 40.4283 24.9934 40.9767 24.9934 40.9767L27.4372 44.0001H29.9706C29.9706 44.0001 30.173 43.1246 29.4763 42.837C28.7809 42.5495 28.492 42.6614 28.492 42.6614L27.2189 40.9073C27.2189 40.9073 31.6096 35.2913 30.4217 31.9683C29.2339 28.6446 24.6396 34.8243 24.6396 34.8243Z" fill="#BD5E44" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M30.1743 33.1191C30.1743 34.9947 28.6543 36.514 26.7787 36.514C24.9038 36.514 23.3838 34.9947 23.3838 33.1191C23.3838 31.2441 24.9038 29.7241 26.7787 29.7241C28.6543 29.7241 30.1743 31.2441 30.1743 33.1191Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M46.7629 29.1566L46.259 29.0307L46.6528 29.2769L47.8521 29.8342C47.8521 29.8342 47.5022 30.382 45.9123 29.9812C45.8385 29.929 45.7704 29.882 45.7074 29.8393C45.4548 29.929 45.187 29.9812 44.9038 29.9812C44.8192 29.9812 44.7352 29.9704 44.6513 29.9608C44.4413 29.9341 44.2364 29.8921 44.0417 29.8241C44.0468 30.5646 44.0468 31.337 44.0526 32.0935C44.0786 35.4662 42.371 36.2125 42.371 36.2125L38.6885 29.5085L42.7387 26.1562C43.0333 25.6631 43.4901 25.2845 44.0417 25.0797L44.0526 25.0688V25.0797C44.3204 24.9791 44.6042 24.9219 44.9038 24.9219C46.0592 24.9219 47.0206 25.6994 47.3253 26.7555C48.2186 27.045 49.6317 27.5591 49.6317 27.8905C49.6317 28.3734 48.1238 29.5085 48.1238 29.5085L46.7629 29.1566Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M26.5166 32.7253V29.7242L38.6877 29.5098V37.915C38.6877 37.915 33.3466 37.9984 26.5166 32.7253Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.7078 33.6802C23.7078 33.6802 24.0183 37.5103 22.7694 38.2312C21.5192 38.952 21.6407 39.2307 21.6407 39.2307L20.6934 42.7312L21.9245 43.9999H23.1969C23.1969 43.9999 23.739 43.6563 23.3172 43.0315C22.8954 42.4074 22.0943 42.5563 22.0943 42.5563L22.8375 40.6571C22.8375 40.6571 29.2609 37.9181 30.1058 34.4914C30.9501 31.0646 23.7078 33.6802 23.7078 33.6802Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M38.9805 35.0464C38.9805 35.0464 39.0231 35.1126 39.095 35.2283C39.3845 35.6941 39.8178 38.58 40.1321 39.4746C40.524 40.5912 44.001 44.0001 44.001 44.0001H45.4662C45.4662 44.0001 46.2329 43.3957 45.8372 43.0852C45.5159 42.8345 45.0508 42.6188 44.3789 42.5565C43.3393 42.4598 42.663 38.8504 42.663 38.8504L42.962 35.2201L38.9805 35.0464Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M25.2519 30.0894C25.2519 30.0894 23.9769 30.2102 22.9265 31.4363C21.8755 32.6623 20.5184 36.4269 18.9857 36.514C17.4536 36.6018 16.8848 36.514 16.8848 36.514C16.8848 36.514 16.0526 38.1091 17.9792 38.3629C19.9057 38.6162 19.9947 38.7911 20.979 37.9157C21.9633 37.0402 24.2327 32.2653 24.2327 32.2653L25.2519 30.0894Z" fill="#E1903F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M45.0126 30.0651L44.132 30.9457L40.5596 27.3739L41.4408 26.4927L45.0126 30.0651Z" fill="#362129" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M45.6798 24.5859H43.5898L43.1973 27.3446C43.1973 27.3446 44.1236 27.9192 44.1605 28.0509C44.1974 28.1819 45.412 27.3688 45.412 27.3688L45.3795 25.0625C45.3795 25.0625 45.5208 24.8392 45.6798 24.5859Z" fill="#F3B62C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M45.6794 24.5859C45.5204 24.8392 45.3791 25.0625 45.3791 25.0625L45.4116 27.3688L45.9505 25.6866L45.6909 24.5859H45.6794Z" fill="#CA7055" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M43.1969 33.7127C43.1969 36.0337 41.315 37.915 38.994 37.915C36.673 37.915 34.791 36.0337 34.791 33.7127C34.791 31.3917 36.673 29.5098 38.994 29.5098C41.315 29.5098 43.1969 31.3917 43.1969 33.7127Z" fill="#E1903F" />
                                            </svg>   Walking & Sitting
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi
                                        </Typography>
                                        <Typography sx={{ marginTop: '15px' }} variant="body2" color="text.secondary">
                                            From $15 / hour
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Get Service</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;