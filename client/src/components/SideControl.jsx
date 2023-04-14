import React from 'react'

function SideControl({ value, onChange }) {
    return (
      <input type="text" style={{minHeight : '100px', minWidth: }} value={value} onChange={e => onChange(e.target.value)} />
    );
  }

export default SideControl