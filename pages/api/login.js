export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Simulate authentication (replace with real auth logic, e.g., database check)
    if (username === 'admin' && password === '12345') {
      // Return success response
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Return error response
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}