const PrivacyPolicyPage = () => {
  return (
    <div className="container my-5 py-4" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 text-center fw-bold">سياسة الخصوصية</h2>
      <div className="card p-4 shadow-sm border-0">
        <p className="text-muted">
          نحن نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. توضح هذه السياسة كيفية جمع
          واستخدام بياناتك:
        </p>

        <h5 className="mt-3 fw-bold">1. المعلومات التي نجمعها</h5>
        <p className="text-secondary">
          نجمع البيانات التي تزودنا بها عند التسجيل أو الشراء مثل: الاسم،
          العنوان، رقم الهاتف، والبريد الإلكتروني.
        </p>

        <h5 className="mt-3 fw-bold">2. كيف نستخدم معلوماتك</h5>
        <p className="text-secondary">
          نستخدم هذه البيانات لتجهيز وشحن طلباتك، والتواصل معك بشأن حالة الطلب،
          وتحسين تجربتك داخل المتجر.
        </p>

        <h5 className="mt-3 fw-bold">3. حماية البيانات</h5>
        <p className="text-secondary">
          نطبق أعلى إجراءات الأمان لحماية بياناتك الشخصية من الوصول غير المصرح
          به أو الإفصاح عنها.
        </p>

        <h5 className="mt-3 fw-bold">4. مشاركة المعلومات</h5>
        <p className="text-secondary">
          لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف خارجية إلا الجهات
          اللوجستية المسؤولة عن توصيل الشحنات إليك.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
