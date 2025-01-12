import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Spinner, Form, Alert, Image } from 'react-bootstrap';


const UNSPLASH_ACCESS_KEY = "RPuzRuKbWIOlb3ZHU7uCLPSLx7nGJvtfK_HEWj39Z5M";

if (!UNSPLASH_ACCESS_KEY) {
  throw new Error('Missing UNSPLASH_ACCESS_KEY in environment variables');
}

interface ImageData {
  url: string;
  alt_description: string;
  download_url: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [orientation, setOrientation] = useState('landscape');
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImage = async (searchTerm: string, imageOrientation: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: searchTerm,
          page: 1,
          per_page: 1,
          orientation: imageOrientation,
          count: 1,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });

      if (response.data && response.data.results && response.data.results.length > 0) {
        const image = response.data.results[0];
        setImageData({
          url: image.urls.regular,
          alt_description: image.alt_description || 'Unsplash Image',
          download_url: image.links.download,
        });
      } else {
        setError('No image found. Please try a different query.');
      }
    } catch (err) {
      console.error('Error fetching image:', err);
      setError('An error occurred while fetching the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (query) {
      fetchImage(query, orientation);
    }
  };
  const downloadImage = (url: string, query: string) => {
    const filename = `${query.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="mt-5 text-center">
      <h4 className="mb-4">Unsplash Image Finder</h4>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search Text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
        >
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="squarish">Squarish</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit} disabled={loading}>
        {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Get Image'}
      </Button>

      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {imageData && !loading && (
        <div className="mt-3" style={{ width: '600px', height: '600px', border: '2px solid #ddd', borderRadius: '10px', overflow: 'hidden', margin: '0 auto', position: 'relative' }}>
          <Image src={imageData.url} alt={imageData.alt_description} fluid style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Button variant="outline-primary" onClick={handleSubmit} style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)' }}>
            Re-generate
          </Button>
          <Button variant="outline-success" onClick={() => downloadImage(imageData.download_url, query)} style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
            Download
          </Button>
        </div>
      )}
    </Container>
  );
}

export default App;