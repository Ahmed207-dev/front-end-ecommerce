import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم ارسال رسالتك بنجاح!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5 py-4" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h2 className="mb-4 text-center fw-bold">اتصل بنا</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label font-weight-bold">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">الرسالة</label>
                <textarea
                  className="form-control"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100 py-2">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
