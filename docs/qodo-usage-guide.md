# Guía de Uso y Configuración de Qodo

> **Documentación oficial del proyecto para usar Qodo Merge en el repositorio react-test-qodo**

---

## 📚 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Comandos Disponibles](#comandos-disponibles)
5. [Uso Diario](#uso-diario)
6. [Configuración Avanzada](#configuración-avanzada)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Troubleshooting](#troubleshooting)

---

## 🤖 Introducción

**Qodo Merge** (anteriormente PR-Agent) es una herramienta de revisión de código impulsada por IA que analiza automáticamente Pull Requests, detecta bugs, sugiere mejoras y verifica buenas prácticas.

### ¿Qué Hace Qodo?

- ✅ **Revisa PRs automáticamente** al abrirse o actualizarse
- ✅ **Detecta bugs y vulnerabilidades** antes de merge
- ✅ **Sugiere mejoras** de código y performance
- ✅ **Genera descripciones** automáticas de PRs
- ✅ **Verifica compliance** con estándares del proyecto
- ✅ **Identifica código sin tests** y gaps de cobertura

---

## 🚀 Instalación

### Requisitos Previos

- Ser administrador de la organización GitHub
- Repositorio alojado en GitHub Cloud

### Pasos de Instalación

#### 1. Crear Cuenta en Qodo

1. Ve a [qodo.ai/get-started](https://www.qodo.ai/get-started/)
2. Regístrate con tu cuenta de GitHub
3. Selecciona plan **Developer (Gratis)**: 75 PRs/mes

#### 2. Instalar GitHub App

1. Navega a [GitHub Marketplace - Qodo Merge](https://github.com/marketplace/qodo-merge)
2. Click "Install for free"
3. Selecciona tu organización: `cajimenezvx`
4. Elige "Only select repositories"
5. Marca: `react-test-qodo`
6. Revisa permisos y click "Install"

#### 3. Verificar Instalación

```bash
# Ve a Settings del repo
https://github.com/cajimenezvx/react-test-qodo/settings/installations

# Deberías ver "Qodo Merge" instalado
```

#### 4. Configuración Inicial

El archivo `.pr_agent.toml` en la raíz del repo contiene la configuración:

```bash
# El archivo ya existe en el repo
cat .pr_agent.toml
```

---

## ⚙️ Configuración

### Archivo de Configuración

La configuración se encuentra en `.pr_agent.toml` en la raíz del proyecto.

### Configuración Actual

```toml
[github_app]
auto_review = true         # Revisar PRs automáticamente
auto_describe = true       # Generar descripción automática
auto_improve = false       # Mejoras automáticas (activar luego)

[pr_description]
publish_description_as_comment = true
enable_pr_type = true
final_update_message = true

[pr_reviewer]
inline_code_comments = true
num_code_suggestions = 4
require_all_tests_to_pass = false

[pr_code_suggestions]
num_code_suggestions = 3
commitable_code_suggestions = true

[config]
model = "gpt-4o-mini"      # Modelo optimizado para créditos
fallback_models = ["gpt-4o"]
```

### Modificar Configuración

Para cambiar el comportamiento de Qodo:

1. Edita `.pr_agent.toml`
2. Commit y push los cambios
3. Los nuevos PRs usarán la nueva configuración

**Ejemplo: Deshabilitar auto-review**

```toml
[github_app]
auto_review = false  # Cambiar a false
```

---

## 💬 Comandos Disponibles

Qodo responde a comandos en los comentarios de PRs.

### Comandos Principales

| Comando             | Descripción                      | Ejemplo de Uso                      |
| ------------------- | -------------------------------- | ----------------------------------- |
| `/review`           | Revisa el código completo del PR | `/review`                           |
| `/describe`         | Genera descripción automática    | `/describe`                         |
| `/improve`          | Sugiere mejoras de calidad       | `/improve`                          |
| `/ask [pregunta]`   | Responde preguntas sobre el PR   | `/ask ¿hay problemas de seguridad?` |
| `/update_changelog` | Actualiza CHANGELOG.md           | `/update_changelog`                 |
| `/add_docs`         | Genera documentación             | `/add_docs`                         |
| `/analyze`          | Identifica código sin tests      | `/analyze`                          |

### Cómo Usar Comandos

1. Abre un Pull Request
2. Ve a la pestaña "Conversation"
3. Escribe un comentario con el comando
4. Qodo responderá en 30-60 segundos

**Ejemplo:**

```
/ask ¿Este cambio puede causar problemas de performance?
```

### Comandos con Opciones

```bash
# Review enfocado en seguridad
/review --enable_security_review=true

# Descripción sin walkthrough detallado
/describe --enable_semantic_files_types=false

# Mejorar solo archivos específicos
/improve --pr_code_suggestions.num_code_suggestions=2
```

---

## 📋 Uso Diario

### Flujo de Trabajo Típico

#### 1. Crear Branch

```bash
git checkout -b feature/nueva-funcionalidad
```

#### 2. Hacer Cambios

```bash
# Desarrolla tu código
vim src/components/NewComponent.jsx

# Commit
git add .
git commit -m "feat: agregar nuevo componente"
```

#### 3. Push y Crear PR

```bash
git push origin feature/nueva-funcionalidad

# Ir a GitHub y crear Pull Request
```

#### 4. Qodo Analiza Automáticamente

**Qodo ejecutará automáticamente:**

- ✅ `/describe`: Genera título y descripción
- ✅ `/review`: Revisa el código

**Espera 30-60 segundos**

#### 5. Revisar Comentarios de Qodo

Qodo comentará:

- 🔴 **Issues críticos**: Bugs, vulnerabilidades
- 🟡 **Sugerencias**: Mejoras de código
- 🟢 **Información**: Resumen de cambios

#### 6. Aplicar Cambios

```bash
# Si Qodo sugiere cambios
# Opción A: Aplicar desde GitHub (1-click)
# Opción B: Hacer cambios manualmente

git add .
git commit -m "fix: aplicar sugerencias de Qodo"
git push
```

#### 7. Re-review (Opcional)

Si hiciste cambios grandes:

```
/review
```

#### 8. Aprobación Humana

- Espera review de un compañero (si aplica)
- Merge cuando esté aprobado

---

## 🔧 Configuración Avanzada

### 1. Reglas de Compliance Personalizadas

```toml
[pr_compliance_check]
rules = [
    "No usar console.log en producción",
    "Componentes React deben tener PropTypes",
    "No usar var, solo const/let",
    "Imports deben estar ordenados alfabéticamente",
]
```

### 2. Configurar Modelo de IA

```toml
[config]
# Modelos disponibles:
# - gpt-4o-mini (rápido, económico)
# - gpt-4o (potente, consume más créditos)
# - claude-sonnet-4.5 (alternativa a GPT)
# - gemini-2.5-pro (Google)

model = "gpt-4o-mini"
fallback_models = ["gpt-4o", "claude-sonnet-4.5"]
```

### 3. Labels Automáticos

```toml
[custom_labels]
"Component" = ["src/components/**"]
"Hook" = ["src/hooks/**"]
"Config" = ["**/*.config.js"]
"Style" = ["**/*.css", "**/*.scss"]
"Test" = ["**/*.test.js", "**/*.spec.js"]
```

### 4. Configuración por Branch

```toml
[github_app]
# Solo revisar branches específicos
handle_pr_actions = ["opened", "reopened", "synchronize"]
pr_commands = ["/review", "/describe"]

[pr_reviewer]
# Excluir archivos generados
ignore_files = [
    "package-lock.json",
    "*.min.js",
    "dist/**",
]
```

### 5. Aumentar Severidad de Reviews

```toml
[pr_reviewer]
require_all_tests_to_pass = true
require_test_coverage_percent = 80
require_security_review = true
require_score_review = 7  # Score mínimo 0-10
```

---

## 🎯 Mejores Prácticas

### 1. Adopción Progresiva

**Semana 1-2: Observación**

```toml
[github_app]
auto_review = true
auto_describe = true
auto_improve = false  # Desactivado
```

**Semana 3-4: Agregar Mejoras**

```toml
[github_app]
auto_improve = true  # Activar
```

**Mes 2+: Compliance**

```toml
[pr_compliance_check]
rules = ["..."]  # Agregar reglas custom
```

### 2. Interpretar Comentarios

**❌ No ignorar issues de seguridad**

- Si Qodo marca vulnerabilidad, investigar siempre

**✅ Evaluar sugerencias**

- No todas las sugerencias son relevantes
- Usa criterio profesional

**💡 Aprender de Qodo**

- Lee las explicaciones
- Mejora tus habilidades de coding

### 3. Comandos Manuales para PRs Críticos

Para PRs sensibles, deshabilita auto-review:

```toml
[github_app]
auto_review = false
```

Luego ejecuta manualmente:

```
/review --enable_help_text=true
```

### 4. Monitorear Créditos

```bash
# Dashboard de Qodo
https://app.qodo.ai/

# Ver uso mensual de créditos
# Plan Developer: 250 créditos/mes
```

**Optimizar consumo:**

```toml
[config]
model = "gpt-4o-mini"  # Consume ~50% menos créditos
```

### 5. Integración con CI/CD

```yaml
# .github/workflows/qodo-check.yml
name: Qodo Quality Check

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  qodo-review:
    runs-on: ubuntu-latest
    steps:
      - name: Wait for Qodo
        run: sleep 60 # Esperar análisis

      - name: Check Qodo Comments
        # Script para verificar que no haya issues críticos
        run: echo "Verificar comentarios de Qodo"
```

---

## 🐛 Troubleshooting

### Problema: Qodo No Comenta en el PR

**Causas y Soluciones:**

1. **App no instalada correctamente**

   ```bash
   # Verificar instalación
   Settings → Integrations → GitHub Apps
   # Debe aparecer "Qodo Merge"
   ```

2. **Repositorio no seleccionado**

   - Ir a instalación de Qodo
   - Verificar que `react-test-qodo` esté marcado

3. **PR sin cambios de código**

   - Qodo solo analiza cambios en archivos de código
   - README o docs pueden no activar review

4. **Tiempo de espera insuficiente**
   - Esperar 2-3 minutos
   - Refrescar página del PR

---

### Problema: Demasiados Comentarios

**Solución: Reducir sugerencias**

```toml
[pr_code_suggestions]
num_code_suggestions = 2  # Reducir de 4 a 2
rank_suggestions = true   # Solo mejores sugerencias
```

---

### Problema: Comentarios en Inglés

**Solución:**

```toml
[config]
language = "es"  # Forzar español
```

---

### Problema: Se Acabaron los Créditos

**Soluciones:**

1. **Esperar renovación mensual**

   - Créditos se renuevan cada mes

2. **Usar modelo más eficiente**

   ```toml
   [config]
   model = "gpt-4o-mini"
   ```

3. **Deshabilitar auto-improve**

   ```toml
   [github_app]
   auto_improve = false  # Consume menos créditos
   ```

4. **Upgrade a plan Teams**
   - $30/mes por 2,500 créditos

---

### Problema: Falsos Positivos

**Qodo sugiere cambios incorrectos**

**Solución:**

```toml
[pr_reviewer]
extra_instructions = """
Ignorar sugerencias sobre:
- Uso de console.log en archivos de desarrollo
- Estructura de carpetas personalizada
- [Tu contexto específico]
"""
```

---

## 📊 Métricas y Monitoreo

### Dashboard de Qodo

Accede a: [app.qodo.ai](https://app.qodo.ai/)

**Métricas disponibles:**

- 📈 PRs analizados este mes
- 💳 Créditos usados / restantes
- 🐛 Bugs detectados
- ⏱️ Tiempo ahorrado en reviews

---

## 🔄 Actualizar Qodo

Qodo se actualiza automáticamente. No requiere acción manual.

**Para ver changelog:**

- [github.com/Codium-ai/pr-agent/releases](https://github.com/Codium-ai/pr-agent/releases)

---

## 📚 Recursos Adicionales

- 📖 [Documentación oficial](https://qodo.ai/docs/)
- 💬 [Discord de Qodo](https://discord.gg/qodo)
- 🐙 [GitHub PR-Agent](https://github.com/Codium-ai/pr-agent)
- 📧 [Soporte](https://support.qodo.ai)

---

## ✅ Resumen de Comandos Rápidos

```bash
# Comandos más usados en PRs
/review              # Review completo
/describe            # Descripción automática
/improve             # Sugerencias de mejora
/ask [pregunta]      # Hacer pregunta

# Configuración
vim .pr_agent.toml   # Editar config
git add .pr_agent.toml
git commit -m "chore: actualizar config Qodo"
git push

# Monitoreo
https://app.qodo.ai/  # Dashboard
```

---

**¿Preguntas?** Consulta la [comparación con otras herramientas AI](./ai-code-review-comparison.md) o abre un issue en el repositorio.
