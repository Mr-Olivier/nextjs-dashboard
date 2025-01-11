// // import { db } from "@vercel/postgres";

// // const client = await db.connect();

// // async function listInvoices() {
// // 	const data = await client.sql`
// //     SELECT invoices.amount, customers.name
// //     FROM invoices
// //     JOIN customers ON invoices.customer_id = customers.id
// //     WHERE invoices.amount = 666;
// //   `;

// // 	return data.rows;
// // }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   // try {
//   // 	return Response.json(await listInvoices());
//   // } catch (error) {
//   // 	return Response.json({ error }, { status: 500 });
//   // }
// }

import { db } from "@vercel/postgres";

let client;

async function connectToDatabase() {
  if (!client) {
    client = await db.connect();
  }
}

// Function to list invoices
async function listInvoices() {
  await connectToDatabase(); // Ensure the database connection is established
  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data.rows;
}

// Exported GET function
export async function GET() {
  try {
    const invoices = await listInvoices();
    return new Response(JSON.stringify(invoices), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}
