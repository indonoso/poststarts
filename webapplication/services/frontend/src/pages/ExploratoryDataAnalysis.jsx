import Col from 'react-bootstrap/Col'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

const ExploratoryDataAnalysis =()=> {
 return (<Col><TableauEmbed sourceUrl={"https://public.tableau.com/shared/35BGS77P4?:display_count=y&:origin=viz_share_link&:embed=y"}
 style={{height: "795px", width: "1024px", margin: "auto"}}
className={"center"}
 /></Col>)
}

export default ExploratoryDataAnalysis;