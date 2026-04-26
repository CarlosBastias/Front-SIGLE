import React from 'react';

export default function Dashboard() {
  return (
    <div className="animate-entrance">
      <div className="container" style={{ paddingTop: '3rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '0.2rem' }}>Centro Operativo Provincial</h1>
            <p style={{ color: 'var(--text-gray)' }}>Visión global y cuadro de mando integral de la red asistencial.</p>
          </div>
          <button className="btn btn-primary">Descargar Reporte Operativo</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="metric-box">
            <div className="metric-title">Listas Activas Regionales</div>
            <div className="metric-number">42.301</div>
            <div style={{ color: 'var(--status-high-text)', fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem' }}>↑ 1.2% versus mes anterior</div>
          </div>
          
          <div className="metric-box" style={{ borderLeftColor: 'var(--status-low-text)' }}>
            <div className="metric-title">Recaptura Automática (SAGA)</div>
            <div className="metric-number">128</div>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', fontWeight: '500', marginTop: '0.5rem' }}>Horas reasignadas hoy</div>
          </div>
          
          <div className="metric-box" style={{ borderLeftColor: 'var(--status-high-text)' }}>
            <div className="metric-title">No-Show (Ausentismo)</div>
            <div className="metric-number">14.2%</div>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', fontWeight: '500', marginTop: '0.5rem' }}>En alerta de sobrepaso operativo</div>
          </div>
        </div>

        <div className="premium-card">
          <div className="card-header">
            <h3 style={{ margin: 0 }}>Triaje y Gestión Manual de Paciente</h3>
            <span className="status-badge badge-baja">Buscador Activo</span>
          </div>
          
          <div style={{ maxWidth: '600px' }}>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Ingrese el Rol Único Tributario (RUT) o Pasaporte para localizar la ficha clínica y gestionar la prioridad de atenciones críticas internamente.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="text" className="input-control" placeholder="Ej. 18.234.567-8" style={{ flex: 1 }} />
              <button className="btn btn-primary" style={{ minWidth: '150px' }}>Buscar Ficha</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
