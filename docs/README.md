# Documentación del Proyecto

Documentación oficial de las herramientas AI de code review utilizadas en este proyecto.

---

## 📚 Documentos Disponibles

### 1. [Guía de Uso y Configuración de Qodo](./qodo-usage-guide.md)

**Documentación completa para usar Qodo Merge en el proyecto**

Contenido:

- ✅ Instalación paso a paso
- ✅ Configuración del archivo `.pr_agent.toml`
- ✅ Comandos disponibles y su uso
- ✅ Flujo de trabajo diario
- ✅ Configuración avanzada
- ✅ Mejores prácticas
- ✅ Troubleshooting común

**Leer esta guía si:**

- Necesitas instalar Qodo por primera vez
- Quieres configurar Qodo para el proyecto
- Tienes dudas sobre comandos y uso diario
- Necesitas resolver problemas con Qodo

---

### 2. [Comparación de Herramientas AI de Code Review](./ai-code-review-comparison.md)

**Análisis comparativo de las principales herramientas del mercado**

Herramientas comparadas:

- 🤖 **Qodo** (CodiumAI) - Nuestra elección
- 🐰 **CodeRabbit** - Alternativa económica
- 🤖 **GitHub Copilot** - Code generation
- 🚀 **Amazon CodeGuru** - AWS integration
- 🔒 **Snyk Code (DeepCode)** - Security focus

Incluye:

- ✅ Comparación de pricing detallada
- ✅ Pros y contras de cada herramienta
- ✅ Tabla comparativa de features
- ✅ Recomendaciones por caso de uso
- ✅ Análisis de costos por tamaño de equipo

**Leer esta guía si:**

- Quieres entender por qué elegimos Qodo
- Consideras cambiar de herramienta
- Necesitas justificar inversión a stakeholders
- Quieres combinar múltiples herramientas

---

## 🚀 Quick Start

### Para Nuevos Miembros del Equipo

1. **Lee la documentación básica**

   - [Guía de Uso de Qodo](./qodo-usage-guide.md) - Sección "Instalación"

2. **Configura tu entorno**

   - Asegúrate de tener acceso al repositorio
   - Verifica que Qodo esté instalado (Settings → Integrations)

3. **Crea tu primer PR de prueba**

   - Sigue el [flujo de trabajo diario](./qodo-usage-guide.md#uso-diario)
   - Observa cómo Qodo comenta automáticamente

4. **Aprende los comandos básicos**
   - `/review` - Review completo
   - `/describe` - Generar descripción
   - `/ask [pregunta]` - Hacer preguntas

---

## 🎯 Decisiones de Arquitectura

### ¿Por qué Qodo?

Elegimos **Qodo** sobre otras alternativas por:

1. **Plan gratuito completo**: 75 PRs/mes sin costo
2. **Generación de tests**: Única herramienta que genera tests automáticamente
3. **Enfoque holístico**: IDE + Git + CLI
4. **Open source option**: PR-Agent self-hosted disponible
5. **Menor tasa de falsos positivos**: Focus en accuracy

Ver [comparación detallada](./ai-code-review-comparison.md) para más detalles.

---

## 📖 Recursos Adicionales

### Configuración Actual

- **Archivo de config**: [`../.pr_agent.toml`](../.pr_agent.toml)
- **Modelo de IA**: `gpt-4o-mini` (optimizado para créditos)
- **Auto-review**: Habilitado
- **Auto-describe**: Habilitado

### Enlaces Externos

- 🌐 [Qodo Docs Oficial](https://qodo.ai/docs/)
- 💬 [Discord de Qodo](https://discord.gg/qodo)
- 🐙 [GitHub PR-Agent](https://github.com/Codium-ai/pr-agent)
- 📊 [Dashboard de Qodo](https://app.qodo.ai/)

---

## 🔄 Actualización de Documentación

Esta documentación debe actualizarse cuando:

- ✅ Se cambie la configuración de Qodo
- ✅ Se agreguen nuevas herramientas AI al proyecto
- ✅ Cambien los planes de pricing
- ✅ Surjan nuevos problemas comunes (añadir a troubleshooting)

**Última actualización:** Noviembre 2024  
**Próxima revisión:** Mayo 2025

---

## ❓ ¿Preguntas?

Si tienes dudas no cubiertas en la documentación:

1. Consulta la [guía de troubleshooting](./qodo-usage-guide.md#troubleshooting)
2. Busca en [Discord de Qodo](https://discord.gg/qodo)
3. Abre un issue en el repositorio
4. Contacta al maintainer del proyecto

---

**Mantenido por:** Carlos Jimenez  
**Proyecto:** react-test-qodo  
**Última actualización:** 2024-11-27
