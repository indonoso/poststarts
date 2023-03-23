import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BarChartBefore from '../components/BarChartBefore.jsx';
import BarChartAfter from '../components/BarChartAfter.jsx';

const dataBefore = [
    {
      "name": "table",
      "values": [
        {"category": "Sanctuary or the nave", "amount": 102},
        {
          "category": "Building façade and street (mordenization and urbanization)",
          "amount": 89
        },
        {"category": "Sculpture", "amount": 52},
        {"category": "Church perspective view", "amount": 48},
        {"category": "Luxurious room with chandelier", "amount": 36},
        {
          "category": "City ciew with morden road and street building (mordenization)",
          "amount": 27
        },
        {"category": "Belfries (Sint-Romboutskathedraal)", "amount": 25},
        {"category": "Decorated doors (monastery)", "amount": 24},
        {"category": "Nature ( river with green bank )", "amount": 23},
        {
          "category": "Antwep centre station (build from 1895 to 1905)",
          "amount": 18
        }
      ]
    }
  ]
const dataAfter = [
    {
      "name": "table",
      "values": [
        {"category": "Sanctuary or the nave", "amount": 55},
        {"category": "Church perspective view", "amount": 22},
        {"category": "Dinant (Battle of Dinant)", "amount": 16},
        {"category": "Freyr (Dinant)", "amount": 12},
        {
          "category": "Building façade and street (building façade (mordenization and urbanization))",
          "amount": 12
        },
        {"category": "Textiles-Tapestries (art)", "amount": 10},
        {"category": "Belfries (Sint-Romboutskathedraal)", "amount": 9},
        {"category": "Suburban house with garden", "amount": 9},
        {"category": "Nature (river but have human intervene)", "amount": 8},
        {"category": "Maredsous Abbey (Dinant)", "amount": 7}
      ]
    }
  ]
function TourismAnalysis() {
    return (
        <Row style={{margin: "30px"}}>
            <Col md={{span:8, offset: 2}} >
                <h1>Tourism before and after WWI</h1>
                <p>
                    Postcards have evolved beyond a communication tool and now serve multiple functions, including
                    marketing and tourism. By featuring selected photographs and paintings, postcards establish an image
                    of a place and reflect tourists' interests.
                </p>
                <p>
                    In this database, we focus on those postcards that can tell the time and they account for about
                    one-third of the entire database. With the zoom in these postcard, we found they are mainly
                    concentrated in the 40 years from 1900 to 1939, therefore, we chose World War I as a node to analyze
                    the trending changes.
                </p>
 <div className={"d-flex justify-content-center"}>
                    <BarChartBefore data={dataBefore} />
 </div>
                <p>
                    Among the top 10 topics of the before WW1 period, architecture, particularly religious-related and
                    exquisitely decorated structures, was popular, showcasing Belgian art and craftsmanship. Antwerp
                    center station, completed in 1905, became an iconic landmark and the tenth popular topic.
                </p>
                <div className={"d-flex justify-content-center"}>
                <BarChartAfter data={dataAfter} />
                    </div>
                <p>
                    During the war, there were few postcards published, but the images on their backs reflect changes in
                    tourism following the conflict. While religion-related themes remained popular, Dinant-related
                    topics such as Dinant Citadel, Freÿr, and Maredsous Abbey emerged as the top 10 topics. This
                    phenomenon is likely linked to the Battle of Dinant in World War I and the region's picturesque
                    landscape. According to our analysis, the religious themes reflect people's hope for peace, while
                    the appreciation of natural scenery represents their yearning for peace after the war.
                </p>
                <p>
                    However, there are limitations to our analysis. Only one-third of the postcards in our database have
                    an identifiable time period, and the remaining two-thirds were not included in our analysis.
                    Additionally, the data on postcards after World War I is relatively small, accounting for only about
                    30%, which may limit the generalizability of post-war themes.

                </p>
            </Col>
        </Row>
    )
}

export default TourismAnalysis