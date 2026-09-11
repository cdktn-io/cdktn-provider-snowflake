# `openflowRuntime` Submodule <a name="`openflowRuntime` Submodule" id="@cdktn/provider-snowflake.openflowRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowRuntime <a name="OpenflowRuntime" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntime;

OpenflowRuntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .deployment(java.lang.String)
    .executeAsRole(java.lang.String)
    .maxNodes(java.lang.Number)
    .minNodes(java.lang.Number)
    .name(java.lang.String)
    .nodeType(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OpenflowRuntimeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.deployment">deployment</a></code> | <code>java.lang.String</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.deployment"></a>

- *Type:* java.lang.String

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.executeAsRole"></a>

- *Type:* java.lang.String

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.maxNodes"></a>

- *Type:* java.lang.Number

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.minNodes"></a>

- *Type:* java.lang.Number

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts"></a>

```java
public void putTimeouts(OpenflowRuntimeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment"></a>

```java
public void resetComment()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations"></a>

```java
public void resetExternalAccessIntegrations()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntime;

OpenflowRuntime.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntime;

OpenflowRuntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntime;

OpenflowRuntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntime;

OpenflowRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpenflowRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpenflowRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpenflowRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput">deploymentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput">executeAsRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput"></a>

```java
public OpenflowRuntimeDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput"></a>

```java
public OpenflowRuntimeShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts"></a>

```java
public OpenflowRuntimeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput"></a>

```java
public java.lang.String getDeploymentInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executeAsRoleInput`<sup>Optional</sup> <a name="executeAsRoleInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput"></a>

```java
public java.lang.String getExecuteAsRoleInput();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput"></a>

```java
public IResolvable|OpenflowRuntimeTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowRuntimeConfig <a name="OpenflowRuntimeConfig" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeConfig;

OpenflowRuntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .deployment(java.lang.String)
    .executeAsRole(java.lang.String)
    .maxNodes(java.lang.Number)
    .minNodes(java.lang.Number)
    .name(java.lang.String)
    .nodeType(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .displayName(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(OpenflowRuntimeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment">deployment</a></code> | <code>java.lang.String</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts"></a>

```java
public OpenflowRuntimeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

### OpenflowRuntimeDescribeOutput <a name="OpenflowRuntimeDescribeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeDescribeOutput;

OpenflowRuntimeDescribeOutput.builder()
    .build();
```


### OpenflowRuntimeShowOutput <a name="OpenflowRuntimeShowOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeShowOutput;

OpenflowRuntimeShowOutput.builder()
    .build();
```


### OpenflowRuntimeTimeouts <a name="OpenflowRuntimeTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeTimeouts;

OpenflowRuntimeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowRuntimeDescribeOutputList <a name="OpenflowRuntimeDescribeOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeDescribeOutputList;

new OpenflowRuntimeDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get"></a>

```java
public OpenflowRuntimeDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowRuntimeDescribeOutputOutputReference <a name="OpenflowRuntimeDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeDescribeOutputOutputReference;

new OpenflowRuntimeDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier">nodeTypeTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended"></a>

```java
public IResolvable getInitiallySuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `nodeTypeTier`<sup>Required</sup> <a name="nodeTypeTier" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier"></a>

```java
public java.lang.String getNodeTypeTier();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue"></a>

```java
public OpenflowRuntimeDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a>

---


### OpenflowRuntimeShowOutputList <a name="OpenflowRuntimeShowOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeShowOutputList;

new OpenflowRuntimeShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get"></a>

```java
public OpenflowRuntimeShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpenflowRuntimeShowOutputOutputReference <a name="OpenflowRuntimeShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeShowOutputOutputReference;

new OpenflowRuntimeShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended"></a>

```java
public IResolvable getInitiallySuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue"></a>

```java
public OpenflowRuntimeShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a>

---


### OpenflowRuntimeTimeoutsOutputReference <a name="OpenflowRuntimeTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.openflow_runtime.OpenflowRuntimeTimeoutsOutputReference;

new OpenflowRuntimeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpenflowRuntimeTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---



