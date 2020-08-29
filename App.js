/* Imports
=========================================== */
import React, { useState } from 'react';

// The navigation object that contains all scene
import Navigator from './routes/homeStack';

/* [<EntryPoint>] Application Entry Point
=========================================== */
export default function App() {
  return (
    <Navigator />
  );
}