const TermsPage = () => {
  return (
    <div className="container my-5 py-4" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 text-center fw-bold">الشروط والأحكام</h2>
      <div className="card p-4 shadow-sm border-0">
        <p className="text-muted">
          مرحبًا بك في متجرنا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام
          بالشروط والأحكام التالية:
        </p>

        <h5 className="mt-3 fw-bold">1. استخدام الموقع</h5>
        <p className="text-secondary">
          يُسمح باستخدام هذا الموقع لأغراض الشراء الشخصية فقط. يُحظر استخدام
          الموقع لأي أغراض غير قانونية أو إعادة بيع المنتجات بشكل غير مصرح به.
        </p>

        <h5 className="mt-3 fw-bold">2. الأسعار والطلبات</h5>
        <p className="text-secondary">
          جميع الأسعار المعروضة شاملة للضرائب أو حسب الموضح في الفاتورة. نحتفظ
          بالحق في تعديل الأسعار أو إلغاء الطلبات في حال وجود أخطاء في التسعير.
        </p>

        <h5 className="mt-3 fw-bold">3. الشحن والتوصيل</h5>
        <p className="text-secondary">
          يتم توصيل الطلبات خلال المدة المحجوزة عند إتمام الطلب، وقد تختلف
          مواعيد التوصيل حسب المنطقة السكنية.
        </p>

        <h5 className="mt-3 fw-bold">4. السياسات والإلغاء</h5>
        <p className="text-secondary">
          يحق للعميل إلغاء الطلب قبل تجهيزه للشحن، وتطبق شروط الإرجاع والاستبدال
          المعتمدة.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
