// firebase-data.js
// Simple Firebase Data System untuk Koperasi
// PASTIKAN firebase-config.js sudah di-load SEBELUM file ini!

(function() {
  'use strict';
  
  console.log('🔥 Loading Firebase Data System...');
  
  // =================== CONFIG CHECK ===================
  if (!window.firebaseConfig) {
    console.error('❌ ERROR: firebase-config.js belum di-load!');
    console.error('Pastikan load firebase-config.js SEBELUM firebase-data.js');
    return;
  }
  
  // =================== FIREBASE DATA SYSTEM ===================
  class KoperasiFirebase {
    constructor() {
      this.db = null;
      this.app = null;
      this.isInitialized = false;
      this.eventListeners = {};
      
      // Auto initialize
      this.initialize();
    }
    
    async initialize() {
      try {
        console.log('🚀 Initializing Firebase...');
        
        // 1. Load Firebase SDK jika belum ada
        if (typeof firebase === 'undefined') {
          await this.loadFirebaseSDK();
        }
        
        // 2. Initialize Firebase App
        this.app = firebase.initializeApp(window.firebaseConfig);
        this.db = firebase.firestore();
        this.isInitialized = true;
        
        console.log('✅ Firebase initialized successfully');
        this.emit('initialized', { success: true });
        
      } catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        this.emit('error', { error: error.message });
      }
    }
    
    async loadFirebaseSDK() {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (typeof firebase !== 'undefined') {
          resolve();
          return;
        }
        
        // Load Firebase App
        const scriptApp = document.createElement('script');
        scriptApp.src = 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
        scriptApp.onload = () => {
          // Load Firestore
          const scriptFirestore = document.createElement('script');
          scriptFirestore.src = 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';
          scriptFirestore.onload = resolve;
          scriptFirestore.onerror = reject;
          document.head.appendChild(scriptFirestore);
        };
        scriptApp.onerror = reject;
        document.head.appendChild(scriptApp);
      });
    }
    
    // =================== ANGGOTA DATA METHODS ===================
    async getAnggota(nia) {
      await this.waitForInitialization();
      
      try {
        const docRef = this.db.collection('anggota').doc(nia);
        const docSnap = await docRef.get();
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            ...data,
            last_update: data.last_update || new Date().toLocaleString('id-ID')
          };
        } else {
          console.warn(`⚠️ Anggota ${nia} tidak ditemukan`);
          return null;
        }
      } catch (error) {
        console.error('❌ Error getAnggota:', error);
        throw error;
      }
    }
    
    async updateAnggota(nia, data) {
      await this.waitForInitialization();
      
      try {
        const updateData = {
          ...data,
          updated_at: new Date().toISOString(),
          last_update: new Date().toLocaleString('id-ID')
        };
        
        await this.db.collection('anggota').doc(nia).set(updateData, { merge: true });
        
        console.log(`✅ Anggota ${nia} updated`);
        this.emit('anggotaUpdated', { nia, data: updateData });
        
        return true;
      } catch (error) {
        console.error('❌ Error updateAnggota:', error);
        throw error;
      }
    }
    
    async getAllAnggota() {
      await this.waitForInitialization();
      
      try {
        const snapshot = await this.db.collection('anggota').get();
        const anggotaList = [];
        
        snapshot.forEach(doc => {
          anggotaList.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        return anggotaList;
      } catch (error) {
        console.error('❌ Error getAllAnggota:', error);
        throw error;
      }
    }
    
    async createAnggota(nia, data) {
      await this.waitForInitialization();
      
      try {
        const newData = {
          ...data,
          nia: nia,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          last_update: new Date().toLocaleString('id-ID'),
          qr_url: `https://qr-code-hybrid.vercel.app/qr-code-hybrid.html?id=${nia}`
        };
        
        await this.db.collection('anggota').doc(nia).set(newData);
        
        console.log(`✅ Anggota ${nia} created`);
        this.emit('anggotaCreated', { nia, data: newData });
        
        return true;
      } catch (error) {
        console.error('❌ Error createAnggota:', error);
        throw error;
      }
    }
    
    // =================== REAL-TIME LISTENERS ===================
    listenToAnggota(nia, callback) {
      if (!this.isInitialized) {
        console.error('Firebase not initialized');
        return () => {};
      }
      
      const unsubscribe = this.db.collection('anggota').doc(nia)
        .onSnapshot((doc) => {
          if (doc.exists) {
            callback({
              id: doc.id,
              ...doc.data()
            });
          }
        }, (error) => {
          console.error('Listener error:', error);
        });
      
      return unsubscribe;
    }
    
    listenToAllAnggota(callback) {
      if (!this.isInitialized) {
        console.error('Firebase not initialized');
        return () => {};
      }
      
      const unsubscribe = this.db.collection('anggota')
        .onSnapshot((snapshot) => {
          const changes = [];
          snapshot.docChanges().forEach(change => {
            changes.push({
              type: change.type,
              nia: change.doc.id,
              data: change.doc.data()
            });
          });
          
          if (changes.length > 0) {
            this.emit('anggotaChanges', { changes });
          }
          
          callback(snapshot);
        });
      
      return unsubscribe;
    }
    
    // =================== EVENT SYSTEM ===================
    on(event, callback) {
      if (!this.eventListeners[event]) {
        this.eventListeners[event] = [];
      }
      this.eventListeners[event].push(callback);
    }
    
    emit(event, data) {
      if (this.eventListeners[event]) {
        this.eventListeners[event].forEach(callback => {
          try {
            callback(data);
          } catch (error) {
            console.error(`Event listener error for ${event}:`, error);
          }
        });
      }
    }
    
    // =================== UTILITY METHODS ===================
    async waitForInitialization() {
      if (this.isInitialized) return;
      
      return new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (this.isInitialized) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        
        // Timeout after 10 seconds
        setTimeout(() => {
          clearInterval(checkInterval);
          if (!this.isInitialized) {
            throw new Error('Firebase initialization timeout');
          }
        }, 10000);
      });
    }
    
    async testConnection() {
      try {
        await this.waitForInitialization();
        
        // Try to get a document to test connection
        const test = await this.db.collection('anggota').limit(1).get();
        return {
          connected: true,
          timestamp: new Date().toISOString(),
          totalAnggota: test.size
        };
      } catch (error) {
        return {
          connected: false,
          error: error.message,
          timestamp: new Date().toISOString()
        };
      }
    }
    
    getStatus() {
      return {
        initialized: this.isInitialized,
        hasApp: !!this.app,
        hasDB: !!this.db,
        config: window.firebaseConfig ? 'Loaded' : 'Missing'
      };
    }
    
    // =================== STATISTICS ===================
    async getStatistics() {
      const allAnggota = await this.getAllAnggota();
      
      const stats = {
        total_anggota: allAnggota.length,
        aktif_anggota: allAnggota.filter(a => a.status === 'AKTIF').length,
        total_simpanan: allAnggota.reduce((sum, a) => sum + (a.total_simpanan || 0), 0),
        total_pinjaman: allAnggota.reduce((sum, a) => sum + (a.total_pinjaman || 0), 0),
        total_shu: allAnggota.reduce((sum, a) => sum + (a.shu || 0), 0)
      };
      
      stats.rata_simpanan = stats.total_anggota > 0 
        ? Math.round(stats.total_simpanan / stats.total_anggota) 
        : 0;
      
      return stats;
    }
  }
  
  // =================== GLOBAL SETUP ===================
  // Wait for DOM to be ready before creating instance
  function initializeSystem() {
    if (!window.KoperasiDB) {
      window.KoperasiDB = new KoperasiFirebase();
      
      // Add to window for easy access
      window.KoperasiDB.on('initialized', () => {
        console.log('🎉 KoperasiDB ready to use!');
      });
      
      window.KoperasiDB.on('error', (data) => {
        console.error('🔥 Firebase Error:', data.error);
      });
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSystem);
  } else {
    initializeSystem();
  }
  
  // =================== HELPER FUNCTIONS ===================
  // Format currency helper (optional)
  window.formatRupiah = function(angka) {
    if (!angka && angka !== 0) return 'Rp 0';
    return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  
  // Date format helper (optional)
  window.formatDateID = function(dateString) {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };
  
  // Get URL parameter helper
  window.getURLParam = function(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  };
  
})();
