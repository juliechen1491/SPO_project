/**
 * Voro 管理後台 JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化後台
    initAdmin();
    
    // 載入儀表板數據
    loadDashboardData();
    
    // 設定導航事件
    setupNavigation();
    
    // 檢查用戶權限
    checkUserPermissions();
});

function initAdmin() {
    // 設定當前用戶資訊
    const userData = getUserData();
    if (userData && userData.name) {
        document.getElementById('admin-username').textContent = userData.name;
    }
    
    // 預設顯示儀表板
    showSection('dashboard');
}

function getUserData() {
    // 從 localStorage 獲取用戶資料
    const userData = localStorage.getItem('user');
    if (userData) {
        try {
            return JSON.parse(userData);
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
    }
    
    // 開發測試用的假資料
    return {
        id: 1,
        name: '管理員',
        email: 'admin@voro.com',
        roles: ['admin'],
        isAdmin: true
    };
}

function checkUserPermissions() {
    const userData = getUserData();
    if (!userData || !hasAdminPermission(userData)) {
        alert('您沒有權限訪問此頁面');
        window.location.href = 'login.html';
        return;
    }
}

function hasAdminPermission(userData) {
    return userData.roles && (
        userData.roles.includes('admin') || 
        userData.roles.includes('super_admin') ||
        userData.isAdmin === true
    );
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有 active 狀態
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加 active 到當前連結
            this.classList.add('active');
            
            // 顯示對應章節
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // 隱藏所有章節
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // 顯示指定章節
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 更新頁面標題
    const titles = {
        'dashboard': '儀表板',
        'users': '用戶管理',
        'courses': '課程管理',
        'instructors': '講師管理',
        'enrollments': '報名管理',
        'payments': '支付管理',
        'content': '內容管理',
        'settings': '系統設定'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && titles[sectionName]) {
        pageTitle.textContent = titles[sectionName];
    }
    
    // 載入章節數據
    loadSectionData(sectionName);
}

async function loadDashboardData() {
    try {
        // 模擬 API 調用載入統計資料
        const stats = {
            totalUsers: 1234,
            totalCourses: 89,
            monthlyEnrollments: 156,
            monthlyRevenue: 125600
        };
        
        // 更新統計數字
        document.getElementById('total-users').textContent = stats.totalUsers.toLocaleString();
        document.getElementById('total-courses').textContent = stats.totalCourses;
        document.getElementById('monthly-enrollments').textContent = stats.monthlyEnrollments;
        document.getElementById('monthly-revenue').textContent = formatCurrency(stats.monthlyRevenue);
        
        // 模擬載入圖表
        setTimeout(() => {
            document.getElementById('enrollment-chart').innerHTML = '<p>📈 報名趨勢圖表 (模擬數據)</p>';
            document.getElementById('category-chart').innerHTML = '<p>📊 課程分類統計圖 (模擬數據)</p>';
        }, 1000);
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

async function loadSectionData(sectionName) {
    switch (sectionName) {
        case 'users':
            loadUsersData();
            break;
        case 'courses':
            loadCoursesData();
            break;
    }
}

async function loadUsersData() {
    const tableBody = document.getElementById('users-table-body');
    if (!tableBody) return;
    
    try {
        // 模擬用戶資料
        const users = [
            { id: 1, name: '張小明', email: 'ming@example.com', role: '學員', status: '活躍', createdAt: '2024-01-15' },
            { id: 2, name: '李小華', email: 'hua@example.com', role: '講師', status: '活躍', createdAt: '2024-01-10' },
            { id: 3, name: '王小美', email: 'mei@example.com', role: '學員', status: '暫停', createdAt: '2024-01-08' }
        ];
        
        tableBody.innerHTML = users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status-badge status-${user.status === '活躍' ? 'active' : 'inactive'}">${user.status}</span></td>
                <td>${formatDate(user.createdAt)}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="editUser(${user.id})">編輯</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">刪除</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Error loading users data:', error);
        tableBody.innerHTML = '<tr><td colspan="6" class="error">載入失敗</td></tr>';
    }
}

async function loadCoursesData() {
    const tableBody = document.getElementById('courses-table-body');
    if (!tableBody) return;
    
    try {
        // 模擬課程資料
        const courses = [
            { id: 1, title: '游泳入門班', instructor: '李教練', category: '游泳', price: 2000, status: '已發布', enrollments: 15 },
            { id: 2, title: '單車訓練營', instructor: '張教練', category: '單車', price: 3500, status: '已發布', enrollments: 8 },
            { id: 3, title: '跑步技巧班', instructor: '王教練', category: '跑步', price: 1800, status: '草稿', enrollments: 0 }
        ];
        
        tableBody.innerHTML = courses.map(course => `
            <tr>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td>${course.category}</td>
                <td>${formatCurrency(course.price)}</td>
                <td><span class="status-badge status-${course.status === '已發布' ? 'published' : 'draft'}">${course.status}</span></td>
                <td>${course.enrollments}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="editCourse(${course.id})">編輯</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCourse(${course.id})">刪除</button>
                </td>
            </tr>
        `).join('');
        
    } catch (error) {
        console.error('Error loading courses data:', error);
        tableBody.innerHTML = '<tr><td colspan="7" class="error">載入失敗</td></tr>';
    }
}

// 用戶管理函數
function showUserModal() {
    alert('新增用戶功能開發中...');
}

function editUser(userId) {
    alert(`編輯用戶 ID: ${userId} (功能開發中)`);
}

function deleteUser(userId) {
    if (confirm('確定要刪除此用戶嗎？')) {
        alert(`刪除用戶 ID: ${userId} (功能開發中)`);
    }
}

// 課程管理函數
function showCourseModal() {
    alert('新增課程功能開發中...');
}

function editCourse(courseId) {
    alert(`編輯課程 ID: ${courseId} (功能開發中)`);
}

function deleteCourse(courseId) {
    if (confirm('確定要刪除此課程嗎？')) {
        alert(`刪除課程 ID: ${courseId} (功能開發中)`);
    }
}

// 登出功能
function logout() {
    if (confirm('確定要登出嗎？')) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    }
}

// 工具函數
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW');
}

function formatCurrency(amount) {
    return `NT$ ${amount.toLocaleString()}`;
}