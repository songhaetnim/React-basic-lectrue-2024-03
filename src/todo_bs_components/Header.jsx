import { Nav } from 'react-bootstrap';

export default function Header({filters, filter, onFilterChange}) {
  return (
    <Nav className="justify-content-end" variant="underline" defaultActiveKey="all">
      {
        filters.map((value, index) => (
          <Nav.Item>
            <Nav.Link eventKey={index} onClick={() => onFilterChange(value)}>{value}</Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  );
}