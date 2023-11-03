import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Contact
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Dine In
                        </FooterLink>
                        <FooterLink href="#">
                            TakeOut
                        </FooterLink>
                        <FooterLink href="#">
                            Offers
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Locations</Heading>
                        <FooterLink href="#">
                            Delhi
                        </FooterLink>
                        <FooterLink href="#">
                            Chandigarh
                        </FooterLink>
                        <FooterLink href="#">
                            Karnal
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.linkedin.com/in/saluja-pranav125/" target="_blank">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    LinkedIn
                                </span>
                        </FooterLink>
                        <FooterLink href="https://www.instagram.com/pranav_12.5/" target="_blank">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                        </FooterLink>
                        <FooterLink href="https://github.com/pranav-saluja-125" target="_blank">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Github
                                </span>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;