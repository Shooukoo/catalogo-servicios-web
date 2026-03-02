"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const PROJECT_TYPES = [
    { value: "", label: "Selecciona el tipo de proyecto" },
    { value: "landing", label: "🌐  Landing Page / Sitio Web" },
    { value: "webapp", label: "⚙️  Sistema Web / App" },
    { value: "n8n", label: "⚡  Automatización n8n" },
    { value: "otro", label: "💬  Otro / Consultoría" },
] as const;

const contactSchema = z.object({
    name: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(60, "Nombre demasiado largo"),
    whatsapp: z
        .string()
        .min(7, "Ingresa un número de WhatsApp válido")
        .max(20, "Número demasiado largo")
        .regex(/^[0-9+\s\-()]+$/, "Solo números y caracteres válidos (+, -, espacios)"),
    projectType: z
        .string()
        .min(1, "Por favor selecciona un tipo de proyecto"),
    subject: z
        .string()
        .min(4, "El asunto debe tener al menos 4 caracteres")
        .max(100, "Asunto demasiado largo"),
    message: z
        .string()
        .min(20, "El mensaje debe tener al menos 20 caracteres")
        .max(1000, "Mensaje demasiado largo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function FormField({
    label,
    id,
    error,
    children,
}: {
    label: string;
    id: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium text-gray-300">
                {label}
            </label>
            {children}
            {error && (
                <p className="text-xs text-red-400" role="alert" aria-live="polite">
                    {error}
                </p>
            )}
        </div>
    );
}

const inputClass =
    "w-full px-4 py-3 text-sm rounded-xl border border-white/8 bg-white/3 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none";

export default function ContactForm() {
    const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitState("loading");
        try {
            await addDoc(collection(db, "leads_proyectos"), {
                ...data,
                createdAt: serverTimestamp(),
            });
            setSubmitState("success");
            setTimeout(() => {
                setSubmitState("idle");
                reset();
            }, 4000);
        } catch (err) {
            console.error("Error saving contact:", err);
            setSubmitState("error");
            setTimeout(() => setSubmitState("idle"), 4000);
        }
    };

    if (submitState === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
                <div className="p-4 rounded-full" style={{ background: "var(--accent-glow)" }}>
                    <CheckCircle size={32} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">¡Mensaje enviado!</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Te responderé por WhatsApp en menos de 24 horas.
                    </p>
                </div>
            </motion.div>
        );
    }

    if (submitState === "error") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
                <div className="p-4 rounded-full bg-red-500/10">
                    <AlertCircle size={32} className="text-red-400" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Error al enviar</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Intenta de nuevo o escríbeme directamente por WhatsApp.
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            aria-label="Formulario de contacto"
            noValidate
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Nombre" id="name" error={errors.name?.message}>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        className={cn(inputClass, errors.name && "border-red-500/50 focus:ring-red-500/20")}
                        {...register("name")}
                        autoComplete="name"
                    />
                </FormField>

                <FormField label="WhatsApp" id="whatsapp" error={errors.whatsapp?.message}>
                    <input
                        id="whatsapp"
                        type="tel"
                        placeholder="+52 333 000 0000"
                        className={cn(inputClass, errors.whatsapp && "border-red-500/50 focus:ring-red-500/20")}
                        {...register("whatsapp")}
                        autoComplete="tel"
                    />
                </FormField>
            </div>

            <FormField label="Tipo de Proyecto" id="projectType" error={errors.projectType?.message}>
                <select
                    id="projectType"
                    className={cn(
                        inputClass,
                        "cursor-pointer appearance-none bg-no-repeat",
                        errors.projectType && "border-red-500/50 focus:ring-red-500/20"
                    )}
                    style={{
                        backgroundImage:
                            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundPosition: "right 14px center",
                        paddingRight: "2.5rem",
                    }}
                    {...register("projectType")}
                >
                    {PROJECT_TYPES.map(({ value, label }) => (
                        <option key={value} value={value} style={{ background: "#111113", color: value ? "#e5e7eb" : "#6b7280" }}>
                            {label}
                        </option>
                    ))}
                </select>
            </FormField>

            <FormField label="Asunto" id="subject" error={errors.subject?.message}>
                <input
                    id="subject"
                    type="text"
                    placeholder="¿En qué puedo ayudarte?"
                    className={cn(inputClass, errors.subject && "border-red-500/50 focus:ring-red-500/20")}
                    {...register("subject")}
                />
            </FormField>

            <FormField label="Mensaje" id="message" error={errors.message?.message}>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className={cn(inputClass, errors.message && "border-red-500/50 focus:ring-red-500/20")}
                    {...register("message")}
                />
            </FormField>

            <button
                type="submit"
                disabled={submitState === "loading"}
                className={cn(
                    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200",
                    "hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                )}
                style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                    boxShadow: "0 0 30px var(--accent-glow)",
                }}
            >
                {submitState === "loading" ? (
                    <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send size={16} />
                        Enviar mensaje
                    </>
                )}
            </button>
        </form>
    );
}
