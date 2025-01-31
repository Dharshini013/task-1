import React, { useState } from "react";
import "./add.css";

const AddDocument = () => {
  const [documentName, setDocumentName] = useState("Contract - 2023");
  const [documentType, setDocumentType] = useState("Documents");
  const [file, setFile] = useState("Contract-457894.pdf");

  return (
    <div className="add-container">
      <div className="add-card">
        <div className="add-header">
          <h2>Add a new document</h2>
          <button className="close-btn">×</button>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
          />
                    <label>Label this document with a descriptive name</label>

        </div>

        <div className="input-group">
          <select
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
          >
            <option value="Documents">Documents</option>
            <option value="Contracts">Contracts</option>
            <option value="Invoices">Invoices</option>
          </select>
          <label>What is the document type?</label>

        </div>

        <div className="uploaded-file">
          <span className="file-icon">📄</span>
          <span className="file-name">{file}</span>
          <button className="remove-file-btn">×</button>
        </div>

        <div className="add-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="add-btn">Add document</button>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
