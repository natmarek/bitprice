import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';


const Index = (props) => (
    <Layout>
        <div>
            <h2 >Welcome</h2>
            <p>Here you can check latest Bitcoin rates</p>
            <Prices bpi={props.bpi}/>
            <style jsx> {`
            h2 {
                text-align: center
            }
            p {
                text-align: center
            }
            `}

            </style>
        </div>
    </Layout>
);


Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }
}

export default Index
