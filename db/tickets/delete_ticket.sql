DELETE FROM tickets 
WHERE ticket_id = ${id};

SELECT t.ticket_id, t.title, t.description, t.complete, u.name FROM tickets t
JOIN users u ON t.employee = u.user_id
WHERE u.company_id = ${company_id};