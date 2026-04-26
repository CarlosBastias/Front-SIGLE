import React, { useState } from 'react';

export default function PortalPaciente({ user }) {
  const [lista] = useState([
    { id: 'REC-2401', especialidad: 'Traumatología', diagnostico: 'Fractura mal consolidada', prioridad: 'ALTA', fecha: '28 Octubre, 2025', estado: 'EN ESPERA', centro: 'Hospital Alta Complejidad Norte' },
    { id: 'REC-1959', especialidad: 'Oftalmología', diagnostico: 'Control Glaucoma', prioridad: 'MEDIA', fecha: '14 Noviembre, 2025', estado: 'AGENDADO', centro: 'Cesfam Sur' }
  ]);

  return (
    <div className="animate-entrance">
      <div className="container" style={{ paddingTop: '3rem' }}>
        <div className="hero-header">
          <h1 className="hero-title">Mi Historial Médico</h1>
          <p className="hero-subtitle">Visualiza y haz seguimiento a tus derivaciones e interconsultas provenientes de la Red de Atención Primaria.</p>
        </div>

        <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)', fontSize: '1.5rem' }}>Derivaciones Activas</h2>
        
        <div className="grid-modular">
          {lista.map(item => (
            <div key={item.id} className="premium-card">
              <div className="card-header">
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{item.especialidad}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>DOC. {item.id}</span>
                </div>
                <span className={`status-badge badge-${item.prioridad.toLowerCase()}`}>{item.prioridad}</span>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '0.8rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: '700' }}>Motivo Clínico</span>
                  <span style={{ color: 'var(--text-dark)' }}>{item.diagnostico}</span>
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: '700' }}>Establecimiento Asignado</span>
                  <span style={{ color: 'var(--text-dark)' }}>{item.centro}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: '700' }}>Fecha Derivación</span>
                  <span style={{ color: 'var(--text-dark)' }}>{item.fecha}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.estado === 'AGENDADO' ? 'var(--status-low-text)' : 'var(--status-mid-text)' }}></div>
                  <span style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-dark)' }}>{item.estado}</span>
                </div>
                {item.estado === 'AGENDADO' && (
                  <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Ver Detalle Hora</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
