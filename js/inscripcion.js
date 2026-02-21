(function () {
  const form = document.getElementById("alta-form");
  const cuota = document.getElementById("cuota");
  const cuotaOut = document.getElementById("cuota-output");
  const meter = document.getElementById("meter");
  const progress = document.getElementById("progress");

  function updateCuota() {
    cuotaOut.value = String(cuota.value || 0);
  }

  function completionPercent() {
    // Campos “relevantes” para progreso: inputs y textarea
    const fields = Array.from(form.querySelectorAll("input, textarea, select"))
      .filter(el => el.type !== "submit" && el.type !== "reset" && el.name);

    const filled = fields.filter(el => {
      if (el.type === "checkbox") return el.checked;
      if (el.type === "radio") {
        const group = form.querySelectorAll(`input[type="radio"][name="${el.name}"]`);
        return Array.from(group).some(r => r.checked);
      }
      return (el.value || "").trim().length > 0;
    });

    const pct = fields.length ? Math.round((filled.length / fields.length) * 100) : 0;
    return Math.max(0, Math.min(100, pct));
  }

  function updateProgress() {
    const pct = completionPercent();
    meter.value = pct;
    progress.value = pct;
  }

  cuota.addEventListener("input", () => { updateCuota(); updateProgress(); });
  form.addEventListener("input", updateProgress);
  form.addEventListener("change", updateProgress);
  form.addEventListener("reset", () => {
    setTimeout(() => { updateCuota(); updateProgress(); }, 0);
  });

  updateCuota();
  updateProgress();
})();