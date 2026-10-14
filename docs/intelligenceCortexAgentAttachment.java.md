# `intelligenceCortexAgentAttachment` Submodule <a name="`intelligenceCortexAgentAttachment` Submodule" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntelligenceCortexAgentAttachment <a name="IntelligenceCortexAgentAttachment" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment snowflake_intelligence_cortex_agent_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachment;

IntelligenceCortexAgentAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cortexAgentName(java.lang.String)
    .snowflakeIntelligenceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IntelligenceCortexAgentAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.cortexAgentName">cortexAgentName</a></code> | <code>java.lang.String</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.snowflakeIntelligenceName">snowflakeIntelligenceName</a></code> | <code>java.lang.String</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cortexAgentName`<sup>Required</sup> <a name="cortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.cortexAgentName"></a>

- *Type:* java.lang.String

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `snowflakeIntelligenceName`<sup>Required</sup> <a name="snowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.snowflakeIntelligenceName"></a>

- *Type:* java.lang.String

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts"></a>

```java
public void putTimeouts(IntelligenceCortexAgentAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachment;

IntelligenceCortexAgentAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachment;

IntelligenceCortexAgentAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachment;

IntelligenceCortexAgentAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachment;

IntelligenceCortexAgentAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntelligenceCortexAgentAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntelligenceCortexAgentAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntelligenceCortexAgentAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntelligenceCortexAgentAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput">cortexAgentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput">snowflakeIntelligenceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName">cortexAgentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName">snowflakeIntelligenceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts"></a>

```java
public IntelligenceCortexAgentAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a>

---

##### `cortexAgentNameInput`<sup>Optional</sup> <a name="cortexAgentNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput"></a>

```java
public java.lang.String getCortexAgentNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `snowflakeIntelligenceNameInput`<sup>Optional</sup> <a name="snowflakeIntelligenceNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput"></a>

```java
public java.lang.String getSnowflakeIntelligenceNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput"></a>

```java
public IResolvable|IntelligenceCortexAgentAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `cortexAgentName`<sup>Required</sup> <a name="cortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName"></a>

```java
public java.lang.String getCortexAgentName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `snowflakeIntelligenceName`<sup>Required</sup> <a name="snowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName"></a>

```java
public java.lang.String getSnowflakeIntelligenceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntelligenceCortexAgentAttachmentConfig <a name="IntelligenceCortexAgentAttachmentConfig" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachmentConfig;

IntelligenceCortexAgentAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cortexAgentName(java.lang.String)
    .snowflakeIntelligenceName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(IntelligenceCortexAgentAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName">cortexAgentName</a></code> | <code>java.lang.String</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName">snowflakeIntelligenceName</a></code> | <code>java.lang.String</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cortexAgentName`<sup>Required</sup> <a name="cortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName"></a>

```java
public java.lang.String getCortexAgentName();
```

- *Type:* java.lang.String

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `snowflakeIntelligenceName`<sup>Required</sup> <a name="snowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName"></a>

```java
public java.lang.String getSnowflakeIntelligenceName();
```

- *Type:* java.lang.String

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts"></a>

```java
public IntelligenceCortexAgentAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

### IntelligenceCortexAgentAttachmentTimeouts <a name="IntelligenceCortexAgentAttachmentTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachmentTimeouts;

IntelligenceCortexAgentAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntelligenceCortexAgentAttachmentTimeoutsOutputReference <a name="IntelligenceCortexAgentAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.intelligence_cortex_agent_attachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference;

new IntelligenceCortexAgentAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntelligenceCortexAgentAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---



