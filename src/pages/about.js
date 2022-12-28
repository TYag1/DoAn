import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = {
  render() {
    return `
        <div class="container">
            ${Header.render()}
            <div >
                about page
            </div>
            ${Footer.render()}
        </div>
        `;
  },
};
export default AboutPage;
