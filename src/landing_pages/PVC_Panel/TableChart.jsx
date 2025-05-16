import React from "react";
import { Container, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ComparisonTable = ({ title, description, items }) => {
  return (
    <div style={{ backgroundColor: "#fffaf0", opacity:"1"}} className="py-5 all-table"  data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#8B4513", fontSize: "2rem" }}>
          {title}
        </h2>
        <p className="text-center mb-5" style={{ padding: "0 1rem", color: "#444", fontSize: "1.1rem", maxWidth: "80vw", margin: "0 auto" }}>
          {description}
        </p>
      <Container>

       <Table responsive hover className="comparison-table shadow">
  <thead  style={{ backgroundColor: "#8B4513", color: "#fff" }}>
    <tr>
      <th className="text-center fs-5"></th>
      <th className="text-center fs-5">PVC</th>
      <th className="text-center fs-5">TRADITIONAL</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, index) => (
      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#fdf8f2" , opacity:"1"}} data-aos="fade-up">
        <td className="text-start align-middle" style={{ fontWeight: "600", }}>
          {item.category}
        </td>
        <td className="text-start align-middle" style={{ padding: "1rem" , fontWeight:"100", fontSize:"0.9rem"}}>
          <p style={{ marginBottom: 0 }}>{item.pvcDescription}</p>
        </td>
        <td className="text-start align-middle" style={{ padding: "1rem" ,fontWeight:"100", fontSize:"0.9rem"}}>
          <p style={{ marginBottom: 0 }}>{item.traditionalDescription}</p>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

      </Container>
    </div>
  );
};

// Usage example
const WallPanelComparison = () => {
  const comparisonData = {
  title: "PVC WALL PANELS VS. TRADITIONAL WALL MATERIALS",
  description:
    "Although traditional wall materials have been used for decades, the emergence of PVC wall panels has revolutionized interior design with their cost-saving and time-efficient benefits. At India Ply, Jehanabad, we are proud to offer high-quality PVC wall panels that reflect modern preferences for efficiency and affordability.",
  items: [
    {
      category: "Durability",
      pvcDescription:
        "PVC wall panels from India Ply are highly durable and resistant to both damage and moisture, ensuring long-lasting performance.",
      traditionalDescription: "Traditional materials are more susceptible to physical damage over time.",
    },
    {
      category: "Maintenance",
      pvcDescription:
        "Our PVC panels require minimal upkeep, are easy to clean, and ideal for humid environments. For maintenance support, trust India Ply—your top PVC wall panel provider in Jehanabad.",
      traditionalDescription:
        "Traditional materials typically demand regular maintenance, including painting and repairs to prevent decay.",
    },
    {
      category: "Installation",
      pvcDescription: "PVC wall panels are quick and easy to install, saving both time and labor.",
      traditionalDescription: "Traditional materials often require complex and time-consuming installation procedures.",
    },
    {
      category: "Beauty",
      pvcDescription:
        "India Ply offers a wide variety of textures, colors, and finishes like wood, stone, or tile to suit modern or classic interiors.",
      traditionalDescription: "Traditional materials maintain a timeless but less diverse visual appeal.",
    },
    {
      category: "Cost",
      pvcDescription:
        "PVC panels are a budget-friendly and stylish solution. Get the most competitive PVC wall panel prices only at India Ply, Jehanabad.",
      traditionalDescription: "Traditional materials can be costly due to both material and installation expenses.",
    },
    {
      category: "Customizability",
      pvcDescription:
        "Our PVC wall panels are flexible and easily customizable to meet your specific design preferences.",
      traditionalDescription:
        "While traditional materials offer limited customization, some variation is possible through material choices or design patterns.",
    },
  ],
};


  return <ComparisonTable {...comparisonData} />;
};

export default WallPanelComparison;
